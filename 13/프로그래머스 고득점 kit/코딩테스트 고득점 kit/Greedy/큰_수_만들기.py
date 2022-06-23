def solution(number, k):
    answer = []

    for num in number:
        while k > 0 and answer and answer[-1] < num:
            answer.pop()
            k -= 1
        answer.append(num)

    return ''.join(answer[:len(answer) - k])


number = "1231234"
k = 3
print(solution(number, k))
