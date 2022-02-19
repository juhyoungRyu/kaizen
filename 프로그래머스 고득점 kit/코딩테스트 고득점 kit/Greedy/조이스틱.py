def solution(name):
    answer = 0
    before = "A" * len(name)

    for i in range(len(before)):
        # if i > 0:
        #     answer += 1

        if name[i] == "A":
            answer += 1
        elif ord(name[i]) <= 79:
            answer += ord(name[i]) - ord(before[i])
        else:
            answer += 26 - (ord(name[i]) - ord(before[i]))
    return answer


name1 = "JEROEN"
name2 = "JAZ"
print(solution(name1))
print(solution(name2))
