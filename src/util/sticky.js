import crypto from 'crypto'
const num = crypto.randomInt(0, 5)

export const sticky = (num + 1).toString(36).substring(10)
