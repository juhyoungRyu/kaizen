n = int(input()) #입력
print_num = 0 #출력할 value
for i in range(1, n+1): #1~입력value까지 반복, i에 하나씩 대입
    div_num = list(map(int, str(i))) #i를 한자리씩 나눠서 배열로 저장
    sum_num = i + sum(div_num) # i와 자릿수들의 합을 더함
    if(sum_num == n): #만약 합한 value가 입력value와 same하다면 출력value는 i
        print_num = i
        break
print(print_num)