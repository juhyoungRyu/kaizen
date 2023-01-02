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

void main() {
  sayHelloPrint('juhyoung');
  print(sayHelloReturn('juhyoung'));

  sayInfo(
    name: 'juhyoung',
    age: 20,
    country: 'korea',
  );
  sayInfo2(); // 기본값 설정 시 이렇게 호출해도 에러가 일어나지 않음 -> null-safty
}
