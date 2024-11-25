export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Square footage must be a positive number.');
    }
    this._sqft = value;
  }
}
