import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floorCount) {
    if (!(floorCount <= 0 || typeof floorCount === 'number')) {
      throw new TypeError('floors must be a non-negative number');
    }
    this._floors = floorCount;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
