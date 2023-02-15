input.onButtonPressed(Button.A, function () {
    basic.showString("LEIRE")
})
basic.forever(function () {
    if (input.soundLevel() < 130) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
