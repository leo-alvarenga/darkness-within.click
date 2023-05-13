export interface Code {
  numeric: string;
  symbolic: string;
}

export function numberFromPermissions(read: boolean, write: boolean, execute: boolean) {
  if (!read && !write && !execute) return '0';

  let base = 0;

  if (read) base += 4;
  if (write) base += 2;
  if (execute) base += 1;

  return String(base);
}

export function symRepFromCode(code: string) {
  switch (code){
    case '1':
      return '--x';
    case '2':
      return '-w-';
    case '3':
      return '-wx';
    case '4':
      return 'r--';
    case '5':
      return 'r-x';
    case '6':
      return 'rw-';
    case '7':
      return 'rwx';
    default:
      return '---';
  }
}

export const defaultCodes: Code = {
  numeric: '744',
  symbolic: 'rwxr--r--'
}

export const defaultPermissions = [
  [true, true, true],
  [true, false, false],
  [true, false, false],
];

export const targets = ["owner", "group", "public"];
export const perms = ["read", "write", "execute"];
