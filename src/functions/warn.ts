import { colors, formatMenssage } from "#core";

// log de aviso
export function warn(message: string): void {
    console.log(formatMenssage(message, "WARN", colors.yellow, true))
}