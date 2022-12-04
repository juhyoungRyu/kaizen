n = int(input())
word = []

for _ in range(n):
    word.append(input())

word = list(set(word))
word.sort()
word.sort(key=len)

for i in word:
    print(i)
