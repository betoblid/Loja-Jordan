
export function FormatMoney(value: number){

    return value.toLocaleString("PT-BR", {style: 'currency', currency: 'BRL'})
}