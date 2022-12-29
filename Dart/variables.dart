// The Var Keyword

void var_keyword() {
  var name = 'juhyoung';
  // # var 키워드를 통해 타입을 추론하는 변수를 생성 가능

  name = 'change name';
  // # 변수의 값은 변경 가능하지만 타입이 같아야 함
  // name = true # ⛔

  // String name = 'juhyoung'; # 명시적으로 타입을 지정하는 변수도 생성 가능

// # 관습적으로 함수나 메소드 내부에 지역 변수를 선언할 때는 var, 클래스에서 변수나 프로퍼티를 선언할 때는 타입을 지정함
}

// Dynamic Variables
void dynamic_type() {
  var dynamicType;
  // Dynamic Type은 타입이 지정되지 않고 어떤 타입으로든 변할 수 있는 변수
  dynamicType = 1;
  dynamicType = 'test';
  dynamicType = true;

  dynamic dynamicTypeTwo;
  // dynamic 키워드로도 선언할 수 있음
  // 편하지만, 최대한 사용을 지양해야 함
}

// Nullable Variables
void nullable_variables() {
  String? name = 'nico';
  name = null;
  // var은 dynamic type이 있기 때문에 지원하지 않는듯...?
  // 명시타입 변수 선언 뒤에 ?를 붙이면 null을 허용하는 nullable로 변경할 수 있다
  // 기본적으로 Dart에 모든 변수는 non-nullable이다

  if (name != null) {
    name.isNotEmpty;
  }
  // 메소드를 사용하긴 전 변수 뒤에 ?를 붙이면 null이 아닐 때 실행함
  name?.isNotEmpty;
  // 위와 같은 의미를 가진 단축문법!
}

// Final Variables
void final_variables() {
  final name = 'juhyoung';
  final num age = 14;

  // final 키워드를 변수 선언 앞에 붙이면 상수(변경불가)로 선언된다.
  // final 키워드 뒤에도 타입을 명시할 수 있지만 굳이 사용하지 않는다.
}

// Late Variables
void late_variables() {
  late final String name;
  // API 등에서 데이터를 호출한 뒤 해당 변수에 할당한다는 느낌...?
  // late를 사용하면 final임에도 한 번 재할당을 할 수 있다. 사실 첫 할당이라는 느낌으로 사용하는듯
  // 아무 값도 없이 final을 선언할 수 있으므로 dynamic이랑은 조금 다름
}

// Constant Variables
void constant_variables() {
  // Dart에서 const는 js나 ts의 const와는 다르다, 이것들은 오히려 위 final과 비슷하다
  // Dart에서의 const는 컴파일 전에 알아야 하는 값이다. compile-time constant라고도 한다.
  const name = 'juhyoung';
  // name = 'dd'; ⛔
}

void main() {
  print('변수에 대해 공부한 자료입니다.');
}
