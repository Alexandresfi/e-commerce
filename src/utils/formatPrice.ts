export const formatPrices = (price:number) => {
    return new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(price)
}