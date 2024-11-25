import Currency from './3-currency';

/**
 *
 */

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // setter for amount
  set amount(newAmount) {
    if (!(newAmount >= 0 && typeof newAmount === 'number')) {
      throw new TypeError('amount entered should be a non-negative number');
    }
    this._amount = newAmount;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter for currency
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a valid Currency');
    }
    this._currency = newCurrency;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // displays in the following format `amount currency_name (currency_code)`
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  // converts the amount ti
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
