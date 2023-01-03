class Player1 {
  String name = 'jh';
  late String team;
  int age = 20;

  Player1(this.team);

  void sayHello1(String name, String team, int age) {
    print('$name, $age, $team');
  }
}

// option #2 : class마다 다른 값을 주고싶을 때 사용하는 방법
class Player2 {
  late String name;
  late int age, xp;
  late String team;

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
        this.team = 'blue',
        this.xp = 0;

  Player2.createRedPlayer(String name, int age)
      : this.name = name,
        this.age = age,
        this.team = 'red',
        this.xp = 0;

  void sayHello2(String name, team, int age) {
    print('Hello $name, you are $age years old... and team $team');
  }
}

void main() {
  var player1 = Player1('blue');
  player1.sayHello1(player1.name, player1.team, player1.age);

  var player2 = Player2(name: 'juhyoung', team: 'red', age: 20, xp: 0);
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
}
