let x = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.showNumber(x)
        if (x == 5) {
            music.play(music.createSoundExpression(
            WaveShape.Sine,
            5000,
            0,
            255,
            0,
            5000,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            basic.showIcon(IconNames.Heart)
            basic.pause(5000)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        x += -1
        basic.showNumber(x)
        if (x == -5) {
            music.play(music.stringPlayable("E D G F B A C5 B ", 500), music.PlaybackMode.UntilDone)
            basic.showString("No i am freezing")
        }
    }
})
