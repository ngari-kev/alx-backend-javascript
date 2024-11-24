export default class Currency {
  /**
   * Creates a new Currency instance.
   *
   * @param {String} code - The code of the currency (e.g., USD, EUR).
   * @param {String} name - The name of the currency (e.g., Dollar, Euro).
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    if (typeof newCode !== 'string' || newCode.trim() === '') {
      throw new TypeError('Code must be a non-empty string.');
    }
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new TypeError('Name must be a non-empty string.');
    }
    this._name = newName;
  }

  /**
   * Returns a formatted string representing the full currency name and code.
   * 
   * @returns {String} The formatted string (e.g., "Dollar (USD)").
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
