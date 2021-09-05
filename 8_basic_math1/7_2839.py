sugar = int(input())  # 입력받는다
bag = 0  # 봉지 수
while sugar >= 0:  # 음수가 아니면 실행된다
    if sugar % 5 == 0:  # 5의 배수라면 실행
        bag += sugar // 5  # 5로 나눈 value를 봉지 수에 더함
        print(bag)  # 출력
        break  # 5의 배수라면 여기서 종료
    sugar -= 3  # 3씩 빼고
    bag += 1  # 봉지 수를 1씩 증가시키면서 5의 배수가 될 때 까지 돌림
else:
    print(-1)  # 조건에 안맞는다면 -1출력
