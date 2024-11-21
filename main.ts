function L () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm)
    xiamiBoard.OLEDshowUserText("Turn left", 0, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        F()
    } else if (receivedNumber == 8) {
        B()
    } else if (receivedNumber == 14) {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.motorStop(MOTOR.M3)
        xiamiBoard.motorStop(MOTOR.M4)
        xiamiBoard.OLEDshowUserText("Stop", 0, 0)
    } else if (receivedNumber == 4) {
        L()
    } else if (receivedNumber == 10) {
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
    xiamiBoard.OLEDshowUserText("Forward", 0, 0)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        vresistor = xiamiBoard.readAngle()
        vnorm = vresistor / 2
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, vnorm)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Heart)
})
function B () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, vnorm)
    xiamiBoard.OLEDshowUserText("Backward", 0, 0)
}
function R () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.OLEDshowUserText("Turn right", 0, 0)
}
xiamiBoard.IR_callbackUser(function (IR) {
    basic.showString("" + (xiamiBoard.IR_read()))
    basic.pause(2000)
    IR = xiamiBoard.IR_read()
})
let vresistor = 0
let vnorm = 0
xiamiBoard.initXiaMiBoard()
xiamiBoard.tempHumiInit(SENSOR.AHT20)
xiamiBoard.tempHumiInit(SENSOR.SHTC3)
xiamiBoard.setRelay(RELAYVERSION.V1, RELAY.CLOSE)
xiamiBoard.setRelay(RELAYVERSION.V1, RELAY.DISCON)
xiamiBoard.setRelay(RELAYVERSION.V2, RELAY.CLOSE)
xiamiBoard.setRelay(RELAYVERSION.V2, RELAY.DISCON)
let IR = xiamiBoard.IR_read()
led.toggle(2, 2)
led.toggle(1, 2)
led.toggle(0, 2)
led.toggle(3, 2)
led.toggle(4, 2)
radio.setGroup(121)
xiamiBoard.OLEDclear()
xiamiBoard.setBrightness(64)
xiamiBoard.LED(1, 0, 0)
basic.pause(200)
xiamiBoard.LED(1, 1, 0)
basic.pause(200)
xiamiBoard.LED(0, 1, 0)
basic.pause(200)
xiamiBoard.LED(0, 0, 1)
basic.forever(function () {
    xiamiBoard.setIndexColor(0, 0xffff00)
    xiamiBoard.setIndexColor(1, 0xffff00)
    vresistor = xiamiBoard.readAngle()
})
