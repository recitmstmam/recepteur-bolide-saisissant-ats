radio.onReceivedNumber(function (receivedNumber) {
    Temps = input.runningTime() / 1000
    Distance = receivedNumber / 20 * 15.7 / 100
    serial.writeNumbers([Temps, Math.round(Distance * 100) / 100])
    led.toggle(0, 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    control.reset()
})
let Distance = 0
let Temps = 0
radio.setGroup(1)
Temps = 0
Distance = 0
basic.showIcon(IconNames.Yes)
