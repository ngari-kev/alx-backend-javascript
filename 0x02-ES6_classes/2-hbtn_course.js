 /**
   * Creates a new `HolbertonCourse` class, checks and validates the attributes
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - Duration of the course(in months).
   * @param {String[]} students - The names of students taking the course.
   *
   */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
    throw new TypeError('Invalid type or name is empty.');
    }
    this._name = newName;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(newLength) {
    if (typeof newLength !== 'number' || newLength <= 0) {
      throw new TypeError('Length should be a positive number.');
    }
    this._length = newLength;
  }

  // getter for students(which is an array of strings)
  get students() {
    return this._students;
  }

  // setter for students
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
