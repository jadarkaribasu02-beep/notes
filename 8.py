name = input("enter the name of the student: ")
USN = (input("enter the student usn: "))

marks1 = int(input("enter markss for subject 1: "))
marks2 = int(input("enter markss for subject 2: "))
marks3 = int(input("enter markss for subject 3: "))

print(50* '=')

s = int(input("enter max marks: "))
j = marks1 + marks2 + marks3
r = (j/s) * 100

print(50 * '=')

print(f"student name:{name}\nthe usn is:{USN}\nthe  marks secured:{marks1}\nmarks:{marks2}\nmarks:{marks3}\ntotal marks scored:{j}\npercentage:{r}")
