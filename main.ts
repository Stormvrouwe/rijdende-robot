motorbit.forward(80)
let left = 1
let right = 1
basic.forever(function () {
    left = pins.digitalReadPin(DigitalPin.P3)
    right = pins.digitalReadPin(DigitalPin.P4)
    if (right == 0 || left == 0) {
        motorbit.freestyle(0, 0)
    }
})
