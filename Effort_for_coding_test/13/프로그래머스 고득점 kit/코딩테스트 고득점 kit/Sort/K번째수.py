def solution(array, commands):
    answer = []

    while commands:
        now_commands = commands[0]

        i = now_commands[0]
        j = now_commands[1]
        k = now_commands[2]

        now_array = array[(i-1):(j)]
        now_array.sort()

        answer.append(now_array[k-1])

        commands.remove(now_commands)
    return answer
