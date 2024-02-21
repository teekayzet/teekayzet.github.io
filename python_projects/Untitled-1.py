def get_user_info():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    return name, age

def check_voting_eligibility(name, age):
    if age >= 18:
        print(f"Hello, {name}! You are eligible to vote.")
    else:
        print(f"Hello, {name}! You are not yet eligible to vote.")

def main():
    print("Welcome to the Voting Eligibility Checker!")
    name, age = get_user_info()
    check_voting_eligibility(name, age)

if __name__ == "__main__":
    main()
