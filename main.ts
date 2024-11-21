function L () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Turn left", 0, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12 || receivedNumber == 13) {
        F()
    } else if (receivedNumber == 8 || receivedNumber == 9) {
        B()
    } else if (receivedNumber == 14 || receivedNumber == 15) {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.motorStop(MOTOR.M3)
        xiamiBoard.motorStop(MOTOR.M4)
        xiamiBoard.OLEDshowUserText("Stop", 0, 0)
    } else if (receivedNumber == 4 || receivedNumber == 5) {
        L()
    } else if (receivedNumber == 10 || receivedNumber == 11) {
        R()
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
function F () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Forward", 0, 0)
}
input.onButtonPressed(Button.A, function () {
    vnorm += -10
})
function B () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, vnorm)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Backward", 0, 0)
}
function init () {
    xiamiBoard.setIndexColor(0, 0xffff00)
    xiamiBoard.setIndexColor(1, 0xffff00)
    xiamiBoard.initXiaMiBoard()
    xiamiBoard.tempHumiInit(SENSOR.AHT20)
    xiamiBoard.tempHumiInit(SENSOR.SHTC3)
    xiamiBoard.setRelay(RELAYVERSION.V1, RELAY.CLOSE)
    xiamiBoard.setRelay(RELAYVERSION.V1, RELAY.DISCON)
    xiamiBoard.setRelay(RELAYVERSION.V2, RELAY.CLOSE)
    xiamiBoard.setRelay(RELAYVERSION.V2, RELAY.DISCON)
    led.toggle(2, 2)
    led.toggle(1, 2)
    led.toggle(0, 2)
    led.toggle(3, 2)
    led.toggle(4, 2)
    radio.setGroup(121)
    xiamiBoard.OLEDclear()
    xiamiBoard.setBrightness(87)
    xiamiBoard.LED(1, 0, 0)
    basic.pause(200)
    xiamiBoard.LED(1, 1, 0)
    basic.pause(200)
    xiamiBoard.LED(0, 1, 0)
    basic.pause(200)
    xiamiBoard.LED(0, 0, 1)
    vnorm = 120
}
input.onButtonPressed(Button.AB, function () {
    vnorm = 180
})
input.onButtonPressed(Button.B, function () {
    vnorm += 10
})
function R () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Turn right", 0, 0)
}
let bufpar = 0
let vnorm = 0
init()
basic.forever(function () {
    xiamiBoard.OLEDclear()
    bufpar = Math.round(xiamiBoard.Ultrasonic())
    xiamiBoard.setIndexColor(0, xiamiBoard.rgb(bufpar, 50, 50))
    xiamiBoard.setIndexColor(1, xiamiBoard.rgb(bufpar, 50, 50))
    xiamiBoard.OLEDshowUserNumber(bufpar * 1, 2, 0)
    xiamiBoard.OLEDshowUserText("cm", 2, 6)
    xiamiBoard.OLEDshowUserNumber(Math.round(xiamiBoard.readAngle()), 4, 0)
    xiamiBoard.OLEDshowUserText("resistor", 4, 6)
    basic.pause(500)
})
