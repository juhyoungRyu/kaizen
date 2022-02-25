import sys

input = sys.stdin.readline

for i in range(int(input())):
    n = int(input())
    people = []
    cnt = 1

    for _ in range(n):
        a, b = map(int, input().split())
        people.append([a, b])

    people.sort()
    man = people[0][1]

    for i in range(1, n):
        if people[i][1] < man:
            cnt += 1
            man = people[i][1]

    print(cnt)
