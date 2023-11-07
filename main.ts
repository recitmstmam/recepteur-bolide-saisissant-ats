radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 1 && Debut == 2) {
        t1 = input.runningTime()
    }
    Temps = (input.runningTime() - t1) / 1000
    Distance = receivedNumber / 20 * 15.7 / 100
    serial.writeNumbers([Temps, Math.round(Distance * 100) / 100])
    led.toggle(0, 0)
    Debut = 3
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    basic.pause(100)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    control.reset()
})
let t1 = 0
let Debut = 0
let Distance = 0
let Temps = 0
radio.setGroup(1)
Temps = 0
Distance = 0
Debut = 0
basic.showIcon(IconNames.Yes)
Debut = 2
