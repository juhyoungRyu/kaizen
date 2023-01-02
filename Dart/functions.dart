void sayHelloPrint(String name) {
  print('Hello $name, nice to meet you!'); // return이 불가능함, void = 빈 함수 이기 때문에
}

String sayHelloReturn(String name) =>
    'Hello $name, nice to meet you!'; // Fat Arrow Function... 값을 바로 return함

// Named Parameters
void sayInfo({
  required String name,
  required int age,
  required String country,
}) {
  // 파라미터에 {}를 더해주면 named parameters로 사용할 수 있음
  print('$name, $age, $country');
}
// option1, 필수값 설정

String sayInfo2({
  String name = 'anon',
  int age = 0,
  String country = 'korea',
}) {
  return '$name, $age, $country';
} // option2, 기본값 설정

// Optional Positional Parameters
String sayInfo3(String name, int age, [String? country = 'default value']) =>
    '$name, $age, $country';

// QQ Operator
// ??, ??= ...etc
void qqOperator() {
  String? a;

  print(a ?? 'test'); // test 출력
  // left ?? right => left가 null이라면 right를 return함... left가 null이 아니라면 left를 return함

  a = null;
  a ??= 'test';
  print(a); // test 출력
}

// Typedef -> 자료형에 사용자가 원하는 alias를 붙일 수 있음
typedef myData = List<String>;
typedef doubleAndInt = Map<double, int>;

doubleAndInt a = {3.3: 3};
myData b = ['a', 'b'];

void main() {
  sayHelloPrint('juhyoung');
  print(sayHelloReturn('juhyoung'));

  sayInfo(
    name: 'juhyoung',
    age: 20,
    country: 'korea',
  );
  sayInfo2(); // 기본값 설정 시 이렇게 호출해도 에러가 일어나지 않음 -> null-safty
  sayInfo3('juhyoung', 20); // country만 기본값을 부여해서 non-required로 사용 가능
}
