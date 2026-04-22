import { colors } from "#core";
import { getTimestamp } from "#utils";

// Função responsavel por montar a mensagem fatal
export function formatMenssage(
    message: string,
    prefix: string,
    color: string,
    useTimestamp: boolean
): string {
    const time = useTimestamp
    ? `${colors.gray}[${getTimestamp()}]${colors.reset}`
    : ""

    return `${time}${color}[${prefix}]${colors.reset} ${message}`
}