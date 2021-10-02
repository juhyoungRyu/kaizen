n = int(input())
word = []

for _ in range(n):
    word.append(input())

set_word = set(word)
word = list(set_word)
word.sort()
word.sort(key = len)

for i in word:
    print(i)