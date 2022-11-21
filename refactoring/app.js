//  ES6 arrow function
const volumeSetup = () => {
    // setup volume unit interface
    const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    let element = null;
    //Using switch statement rather than the long chang of if/else if statements
    switch (volumeUnit) {
        case 'FIRSTCCY':
            return element = $('#tickervolccy_0');
        case 'USD':
            return element = $('#tickervolccy_USD');
        case 'BTC':
            return element = $('#tickervolccy_BTC');
        case 'ETH':
            return element = $('#tickervolccy_ETH');
        default:
            return element
    }
    //execute only if element exist
    element?.prop("checked", true);
    return window.APP.util.initCurrenciesList()
}