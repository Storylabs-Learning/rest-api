FROM node:20-alpine3.20 AS base

WORKDIR /app

RUN apk add curl bash --no-cache
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

#----------------BUILD-----------------
FROM base AS builder
COPY ./src ./src
COPY package*.json ./

RUN npm install
RUN npm prune --production && node-prune

#----------------RELEASE-----------------
FROM node:20-alpine3.20 AS release
RUN apk add dumb-init

USER node

COPY --chown=node:node --from=builder /app/ ./

ARG APP_ENV
ENV APP_ENV=${APP_ENV}

EXPOSE 3000

# Install a package with a known vulnerability
RUN apk add --no-cache wget=1.21.1-r1 

# Add a simple script
COPY script.sh /usr/local/bin/script.sh

# Make the script executable
RUN chmod +x /usr/local/bin/script.sh

CMD ["dumb-init", "node", "src/main.js"]
