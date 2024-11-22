export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    //getter for name
    get name() {
        return this._name;
    }

    //setter for name
    set name(newName) {
        if (typeof newName !== 'string' || newName.trim() === '') {
            throw new Error('Invalid type or name is empty.');
        }
        this._name = newName;
    }

    //getter for length
    get length() {
        return this._length;
    }

    //setter for length
    set length(newLength) {
        if (typeof newLength !== 'number' || newLength <= 0) {
            throw new Error('Length should be a positive number.');
        }
        this._length = newLength;
    }

    //getter for students(which is an array of strings)
    get students() {
        return this._students;
    }

    //setter for students
    set students(newStudents) {
        if (!Array.isArray(newStudents) || !newStudents.every((s) => typeof s !== 'string')) {
            throw new Error('Students must be an array of strings');
        }
        this._students = newStudents;
    }
}