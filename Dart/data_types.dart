void main() {
  // Basic Data Types
  String name = 'juhyoung'; // 문자열
  bool alive = true; // 논리형
  int age = 12; // 정수형: num 파생
  double money = 69.99; // 실수형: num 파생
  num x = 12; // 숫자형, int와 double의 부모클래스
  x = 1.1;

  // Lists
  var numbers = [1, 2, 3, 4]; // list형 = 배열
  var isFive = true;
  List<int> numbers2 = [
    1,
    2,
    3,
    4,
    if (isFive) 5, // Collection If
  ]; // 명시적 타입 선언

  numbers.add(1); // 같은 타입만 삽입 가능

  // String Interpolation
  var greeting = 'Hello everyone, my name is $name, and I\'m ${age + 1}';

  // Collection For
  var oldFriends = ['name1', 'name2'];
  var newFriends = [
    'name3',
    'name4',
    for (var friend in oldFriends) "💝 $friend", // Python For이랑 닮았다고 생각함
  ];

  // Maps
  // Js의 Object, Python의 Dictionary와 비슷
  var player = {
    'name': 'nico',
    'xp': 19.99,
    'superpower': false,
  };

  Map<String, Object> player2 = {
    'name': 'nico',
    'xp': 19.99,
    'superpower': false,
  }; // 명시적 타입 선언

  // Sets
  var setNum = {1, 2, 3, 4};
  Set<int> setNum2 = {1, 2, 3, 4}; // 명시적 타입 선언
}
