// wrapper do proces.exit
export function exitProcess(code: string): never {
  process.exit(code);
}
