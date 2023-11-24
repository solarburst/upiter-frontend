import Cookies from 'js-cookie';

export const useCurrency = (prices: { amount: number; currency: number }[], selectedCurrency: number) => {
    const currencyId = selectedCurrency || Cookies.get('SELECTED_CURRENCY') || prices[0].currency;
    let symbol;

    const selectedPrice = prices.find((price) => price.currency === +currencyId);
    const amount = selectedPrice ? selectedPrice.amount : prices[0].amount;

    switch (selectedPrice ? currencyId.toString() : prices[0].currency.toString()) {
        case '1': {
            symbol = '₽';
            break;
        }

        case '2': {
            symbol = '$';
            break;
        }

        case '3': {
            symbol = '€';
            break;
        }

        default: {
            symbol = '';
            break;
        }
    }

    return selectedPrice ? `${amount} ${symbol}` : `${prices[0].amount} ${symbol}`;
};
