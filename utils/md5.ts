import { createHash } from 'crypto'

export function generateMD5Hash(text: string): string {
  return createHash('md5').update(text).digest('base64')
}
