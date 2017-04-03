import R from 'ramda';
const images = R.range(1, 11).map(i => i);
const data = [{
  "id": 1,
  "time": "8:54 AM",
  "message": "Алла Губич",
  "isRead": false,
  "isViewed": false,
  "image": images[0]
}, {
  "id": 2,
  "time": "11:56 AM",
  "message": "Слава Иванова",
  "isRead": false,
  "isViewed": true,
  "image": images[1]
}, {
  "id": 3,
  "time": "1:34 AM",
  "message": "Катя Степанова",
  "isRead": true,
  "isViewed": false,
  "image": images[2]
}, {
  "id": 4,
  "time": "2:12 AM",
  "message": "Григорий Губерт",
  "isRead": true,
  "isViewed": true,
  "image": images[3]
}, {
  "id": 5,
  "time": "11:23 AM",
  "message": "Леонид Федорович",
  "isRead": false,
  "isViewed": false,
  "image": images[4]
}, {
  "id": 6,
  "time": "3:15 PM",
  "message": "Стас Светлый",
  "isRead": false,
  "isViewed": false,
  "image": images[5]
}, {
  "id": 7,
  "time": "5:06 AM",
  "message": "Геннадий Горин",
  "isRead": true,
  "isViewed": true,
  "image": images[6]
}, {
  "id": 8,
  "time": "11:28 PM",
  "message": "Антон Орлов",
  "isRead": true,
  "isViewed": false,
  "image": images[7]
}, {
  "id": 9,
  "time": "12:36 PM",
  "message": "Лида Йцукен",
  "isRead": true,
  "isViewed": true,
  "image": images[8]
}, {
  "id": 10,
  "time": "3:05 PM",
  "isRead": true,
  "isViewed": true,
  "image": images[9]
}, {
  "id": 11,
  "time": "10:02 PM",
  "message": "Геннадий Горин",
  "isRead": true,
  "isViewed": true,
  "image": images[10]
}, {
  "id": 12,
  "time": "1:19 AM",
  "message": "Лида Йцукен",
  "isRead": false,
  "isViewed": false,
  "image": images[0]
}, {
  "id": 13,
  "time": "11:28 PM",
  "message": "Анастасия Орехова",
  "isRead": false,
  "isViewed": false,
  "image": images[1]
}, {
  "id": 14,
  "time": "12:45 AM",
  "message": "Наталья Гецман",
  "isRead": false,
  "isViewed": true,
  "image": images[2]
}, {
  "id": 15,
  "time": "10:24 AM",
  "message": "Светлана Дмитриева",
  "isRead": false,
  "isViewed": true,
  "image": images[3]
}];

module.exports = {
  images,
  data
};
