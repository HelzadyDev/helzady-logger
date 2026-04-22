import { colors, formatMenssage } from "#core";

// log de erro
export function error(message: string): void {
    console.error(formatMenssage(message, "ERROR", colors.red, true))
}