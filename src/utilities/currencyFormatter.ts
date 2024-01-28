const CURRENCY = new Intl.NumberFormat(undefined,{ currency:"INR", style:"currency" })

export function currencyFormatter (number : number){
    return CURRENCY.format(number);
}