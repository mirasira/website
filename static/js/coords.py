import copy

def Recursion(N, E, chars, depth, Array, file, FinalArray):
    if depth == 6:
        if (N + Array[0:3] + " " + E + Array[3:6]) not in FinalArray:
            FinalArray.append(N + Array[0:3] + " " + E + Array[3:6])
            file.write(N + Array[0:3] + " " + E + Array[3:6] + "\n")
        return
    
    for i in range(len(chars)):
        charscopy = copy.deepcopy(chars)
        charscopy = charscopy[:i] + charscopy[i+1:]
        Recursion(N, E, charscopy, depth+1, Array + chars[i], file, FinalArray)

if __name__ == "__main__":
    chars = "537739"

    N = "N 50 40."
    E = "E 14 05."
    file = open("coords.txt", "w")
    Recursion(N, E, chars, 0, "", file, [])
    file.close()
