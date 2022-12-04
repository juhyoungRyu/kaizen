def solution(citations):
    citations.sort(reverse=True)

    for i, cita in enumerate(citations):
        if i >= cita:
            return i
    
    return len(citations)