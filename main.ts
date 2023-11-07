radio.onReceivedNumber(function (receivedNumber) {
    t1 = input.runningTimeMicros() / 1000000
    d1 = receivedNumber / 6 * 9.56 / 100
    Vitesse = Math.abs(d2 - d1) / Math.abs(t2 - t1)
    serial.writeValue("vi", Vitesse)
    t2 = t1
    d2 = d1
    led.toggle(0, 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    control.reset()
})
let t2 = 0
let d2 = 0
let Vitesse = 0
let d1 = 0
let t1 = 0
radio.setGroup(1)
let Fentes = 0
t1 = 0
d1 = 0
basic.showIcon(IconNames.Yes)
