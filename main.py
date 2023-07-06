x = 0

def on_forever():
    global x
    if input.button_is_pressed(Button.A):
        x += 1
        basic.show_number(x)
        if x == 5:
            basic.show_icon(IconNames.HEART)
            basic.pause(5000)
            basic.show_string("bingo i am 5")
    if input.button_is_pressed(Button.B):
        x += -1
        basic.show_number(x)
        if x == -5:
            basic.show_string("No i am freezing")
basic.forever(on_forever)
