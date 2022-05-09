import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
  return bcrypt.hash(password, 7);
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
