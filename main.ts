input.onButtonPressed(Button.A, function () {
    millimeters = 0 + 1
    basic.showNumber(millimeters)
})
input.onButtonPressed(Button.B, function () {
    millimeters += 0 - 2
    basic.showNumber(millimeters)
    if (true) {
        millimeters += 0
        basic.showNumber(millimeters)
    }
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    millimeters += 0 - 5
})
let millimeters = 0
let tempeture = 20
basic.showNumber(millimeters)
