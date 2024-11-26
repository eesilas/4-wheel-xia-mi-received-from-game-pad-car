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
    } else if (receivedNumber == 14 || receivedNumber == 15 || bufpar < 9) {
        stop()
    } else if (receivedNumber == 4 || receivedNumber == 5) {
        L()
    } else if (receivedNumber == 10 || receivedNumber == 11) {
        R()
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 45)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 90)
    } else if (receivedNumber == 3) {
        pins.servoWritePin(AnalogPin.P0, 126)
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
function stop () {
    xiamiBoard.motorStop(MOTOR.M1)
    xiamiBoard.motorStop(MOTOR.M2)
    xiamiBoard.motorStop(MOTOR.M3)
    xiamiBoard.motorStop(MOTOR.M4)
    xiamiBoard.OLEDshowUserText("Stop", 0, 0)
}
function B () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, vnorm)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Backward", 0, 0)
}
function init () {
    radio.setGroup(121)
    xiamiBoard.initXiaMiBoard()
    xiamiBoard.setIndexColor(0, 0xffff00)
    xiamiBoard.setIndexColor(1, 0xffff00)
    xiamiBoard.OLEDclear()
    xiamiBoard.setBrightness(87)
    vnorm = 120
}
function R () {
    xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, vnorm)
    xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, vnorm / 2)
    xiamiBoard.OLEDclear()
    xiamiBoard.OLEDshowUserText("Turn right", 0, 0)
}
let Irvar = 0
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
    vnorm = Math.round(xiamiBoard.readAngle()) / 4
    xiamiBoard.OLEDshowUserNumber(vnorm, 4, 0)
    xiamiBoard.OLEDshowUserText("resistor", 4, 6)
    Irvar = xiamiBoard.IR_read()
    xiamiBoard.OLEDshowUserNumber(xiamiBoard.IR_read(), 6, 0)
    xiamiBoard.OLEDshowUserText("IR　", 6, 6)
    basic.pause(200)
})
