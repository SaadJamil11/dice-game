import random

def roll_dice():
    return random.randint(1, 6)

def play_game():
    print("Welcome to the Extended Dice Game!")
    # Ask how many rounds the player wants to roll
    while True:
        try:
            rounds = int(input("How many rounds would you like to play? "))
            if rounds < 1:
                print("Please enter a positive integer.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a number.")
    
    total_score = 0
    
    for i in range(1, rounds + 1):
        input(f"Press Enter to roll the dice for round {i}...")
        dice_value = roll_dice()
        total_score += dice_value
        print(f"Round {i}: You rolled a {dice_value}!")
    
    print(f"\nGame Over! You played {rounds} rounds.")
    print(f"Your final score is: {total_score}")

if __name__ == "__main__":
    play_game()
#updated_dice_game_with_score_board_feature

