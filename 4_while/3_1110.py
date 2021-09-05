# 연산자로 풀이하는 방법(int)

n = int(input()) # 입력받을 수
num = n
cnt = 0 # 사이클 수

while True:
    a = num // 10
    b = num % 10
    c = (a + b) % 10
    num = (b * 10) + c

    cnt = cnt + 1
    if(num == n):
        break

print(cnt)

# 문자열로 풀이하는 방법(str)  

n = input()
num = n
cnt = 0

while 1:
    if len(num) == 1:
        num = "0" + num
    plus = str(int(num[0]) + int(num[1]))
    num = num[-1] + plus[-1]
    cnt += 1
    if num == n:
        print(cnt)
        break