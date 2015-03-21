from __future__ import division
import random
from browser import document, window
from javascript import JSConstructor

def genExpr(first=0, second=9):
    symbs = ['+', '-', '*', '/']

    num1 = random.randint(first, second)
    num2 = random.randint(first, second)

    symb = random.choice(symbs)

    if symb == '+':
        answer = num1 + num2

    elif symb == '-':
        answer = num1 - num2

    elif symb == '/':
        while True:
            if num2 != 0:
                answer = num1 / num2
                if str(answer).split('.')[1] != '0':
                    answer = round(answer, 2)
                else:
                    answer = int(answer)

                break

            else:
                num2 = random.randint(first, second)


    elif symb == '*':
        answer = num1 * num2

    expression = str(num1) + symb + str(num2)

    return expression, answer

expression, answer1 = genExpr()

document['exp'].text = expression

def show_answer():
    document['answer_field'].text = str(answer1)

def answer(event):
    global expression
    global answer1

    print(answer1)

    if document['answer_input'].value == str(answer1):
        remove_border = JSConstructor(window.remove_red_border)
        remove_border()
        document['answer_field'].text = ""
        document['answer_input'].value = ""
        expression, answer1 = genExpr()
        document['exp'].text = expression
    else:
        document['answer_input'].value = ""
        add_border = JSConstructor(window.add_red_border)
        add_border()

def returnkey(ev):
    if ev.keyCode == 13:
        answer()
    ev.stopPropagation()



document['check_button'].bind('click', answer)
document['answer_input'].bind('keypress', returnkey)
document['show_answer'].bind('click', show_answer)
