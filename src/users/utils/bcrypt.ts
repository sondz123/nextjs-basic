/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(rawPassword, SALT);
}
