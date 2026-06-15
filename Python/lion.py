import random
import os
import time

width = 20
height = 10

snake = [(5, 5)]
direction = (1, 0)

food = (
    random.randint(0, width - 1),
    random.randint(0, height - 1)
)

while True:
    os.system("cls" if os.name == "nt" else "clear")

    for y in range(height):
        for x in range(width):
            if (x, y) == snake[0]:
                print("O", end="")
            elif (x, y) in snake:
                print("o", end="")
            elif (x, y) == food:
                print("*", end="")
            else:
                print(".", end="")
        print()

    print("W A S D orqali boshqaring")

    move = input().lower()

    if move == "w":
        direction = (0, -1)
    elif move == "s":
        direction = (0, 1)
    elif move == "a":
        direction = (-1, 0)
    elif move == "d":
        direction = (1, 0)

    head_x, head_y = snake[0]
    dx, dy = direction

    new_head = (head_x + dx, head_y + dy)

    if (
        new_head[0] < 0
        or new_head[0] >= width
        or new_head[1] < 0
        or new_head[1] >= height
        or new_head in snake
    ):
        print("Game Over!")
        break

    snake.insert(0, new_head)

    if new_head == food:
        while food in snake:
            food = (
                random.randint(0, width - 1),
                random.randint(0, height - 1)
            )
    else:
        snake.pop()

    time.sleep(0.1)