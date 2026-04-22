import { colors, formatMenssage } from "#core";

// Log de sucesso
export function success(message: string): void {
    console.log(formatMenssage(message, "SUCCESS", colors.green, true))
}