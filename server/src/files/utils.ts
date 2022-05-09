import { extname } from 'path';

export const editFileName = (
  _: any,
  file: { originalname: string },
  callback: (arg0: any, arg1: string) => void,
) => {
  const fileExtName = extname(file.originalname);
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${randomName}${fileExtName}`);
};
