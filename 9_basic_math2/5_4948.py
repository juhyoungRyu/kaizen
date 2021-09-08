def num(num):
    if num == 1:
        return False
    else:
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                return False
        return True


all_list = list(range(2, 246912))
save_list = []

for i in all_list:
    if num(i):
        save_list.append(i)

num = int(input())

while num != 0:
    count = 0
    for i in save_list:
        if num < i <= num * 2:
            count += 1
    print(count)
    num = int(input())
