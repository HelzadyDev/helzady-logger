import { formatDate } from "#function";

// Define opções adicionais para o fatal
type fatalOptions = {
  code?: number;
  prefix?: string;
  showStack?: boolean;
  timestamp?: boolean;
  error?: unknown;
};

export function fatal(message: string, options: fatalOptions = {}): never {
  const {
    code = 1,
    prefix = "SECURITY",
    showStack = true,
    timestamp = true,
    error,
  } = options; 

  const time = timestamp ? `[${formatDate(new Date())}]` : ""

  const formatedMessage = `❌ ${time}[${prefix}] ${message}`

  console.error(formatedMessage)

  if(error instanceof Error) {
    console.error(`🠪 ${error.name}: ${error.message}`)

    if(showStack && error.stack){
        console.error(error.stack)

    }

  }else if (error){
    console.error("🠪", error)
  }
  process.exit(code)
}
