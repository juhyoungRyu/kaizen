import 'package:flutter/material.dart';

class Player {
  late String name;
  Player({required this.name});
}

void main() {
  var me = Player(name: 'jh');
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Flutter!'),
        ),
        body: Center(
          child: Text('Hello world!'),
        ),
      ),
    );
  }
}
