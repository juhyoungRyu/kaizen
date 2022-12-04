def solution(answers):
    answer = []
    score = [0, 0, 0]
    one = [1, 2, 3, 4, 5]  # 5
    two = [2, 1, 2, 3, 2, 4, 2, 5]  # 8
    thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]  # 10

    for i in range(len(answers)):
        s1 = i % 5
        s2 = i % 8
        s3 = i % 10

        if one[s1] == answers[i]:
            score[0] += 1

        if two[s2] == answers[i]:
            score[1] += 1

        if thr[s3] == answers[i]:
            score[2] += 1

    k = max(score)

    if k == score[0]:
        answer.append(1)

    if k == score[1]:
        answer.append(2)

    if k == score[2]:
        answer.append(3)

    return answer
