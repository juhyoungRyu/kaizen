class Player1 {
  String name = 'jh';
  late String team;
  int age = 20;

  Player1(this.team);

  void sayHello1(String name, String team, int age) {
    print('$name, $age, $team');
  }
}

enum Team { red, blue } // 사용자 정의 속성? Enums...

abstract class Human {
  // 추상화 클래스 -> 상속받은 클래스가 어떤 메소드를 구현하게 강제함
  void walk();
}

// option #2 : class마다 다른 값을 주고싶을 때 사용하는 방법
class Player2 extends Human {
  late String name;
  late int age, xp;
  late Team team;

  // option #1 : 길게 표현
  // Player2(
  //   String name,
  //   int age,
  // ) {
  //   this.name = name;
  //   this.age = age;
  // }

  // option #2 : 짧게 표현
  // Player2(this.name, this.age);

  Player2({
    required this.name,
    required this.age,
    required this.team,
    required this.xp,
  }); // Named Constructors Parameters

  Player2.createBluePlayer({
    required String name,
    required int age,
  })  : this.age = age,
        this.name = name,
        this.team = Team.blue,
        this.xp = 0;

  Player2.createRedPlayer(String name, int age)
      : this.name = name,
        this.age = age,
        this.team = Team.blue,
        this.xp = 0;

  void walk() {
    print('Human can walking...');
  }

  void sayHello2(String name, team, int age) {
    print('Hello $name, you are $age years old... and team $team');
  }
}

class Human_inheritance {
  final String name;
  Human_inheritance({required this.name});

  void sayHello() {
    print('Hi my name is $name');
  }
}

class Player_inheritance extends Human_inheritance {
  // 상속
  final Team team;

  Player_inheritance({
    required this.team,
    required String name,
  }) : super(name: name); // 부모 클래스와 소통할 수 있는 문법 super

  @override
  void sayHello() {
    super.sayHello(); // 부모클래스에 전달한 데이터를 이용한 함수
    print('and my team is $team');
  }
}

class mixinTest {
  // 생성자가 없는 클래스에 한하여 Mixin을 사용할 수 있다.
  void sayBye() {
    print('Bye...');
  }
}

class iWantSayBye with mixinTest {
  // extends가 아닌 with 키워드로 불러올 수 있고 아무 조건 없이 mixin 클래스의 메소드를 사용할 수 있다
  late String name;
  late int age;

  iWantSayBye({required this.name, required this.age});
}

void main() {
  var player1 = Player1('blue');
  player1.sayHello1(player1.name, player1.team, player1.age);

  var player2 = Player2(name: 'juhyoung', team: Team.red, age: 20, xp: 0);
  player2.sayHello2(
    player2.name,
    player2.team,
    player2.age,
  );

  var bluePlayer = Player2.createBluePlayer(name: 'blueJuhyoung', age: 20);
  player2.sayHello2(
    bluePlayer.name,
    bluePlayer.team,
    bluePlayer.age,
  );

  var redPlayer = Player2.createRedPlayer('redJuhyoung', 20);
  player2.sayHello2(
    redPlayer.name,
    redPlayer.team,
    redPlayer.age,
  );

  var player_inheritance =
      Player_inheritance(team: Team.blue, name: 'juhyoung');
  player_inheritance.sayHello();

  var i_want_say_bye = iWantSayBye(name: 'juhyoung', age: 20);
  i_want_say_bye.sayBye();
}
