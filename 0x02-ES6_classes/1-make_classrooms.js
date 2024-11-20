import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  let class1 = new ClassRoom(19);
  let class2 = new ClassRoom(20);
  let class3 = new ClassRoom(34);

  return [class1, class2, class3];
}
