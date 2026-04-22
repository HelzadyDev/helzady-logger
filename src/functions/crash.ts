import { colors, CrashOptions, formatMenssage } from "#core";
import { defaults } from "#config";

// função fatal que encerra o processo
export function crash(message: string, options: CrashOptions = {}): never {
  const {
    code = defaults.code,
    prefix = "FATAL",
    showStack = defaults.showStack,
    timestamp = defaults.timeStamp,
    error,
  } = options;

  // Exibe mensagen formatada
  console.error(formatMenssage(message, prefix, colors.red, timestamp));

  // Exibe stack trace se existir
  if (showStack && error instanceof Error) {
    console.error(error.stack);
  }

  // Encerra o processo
  process.exit(code);
}
