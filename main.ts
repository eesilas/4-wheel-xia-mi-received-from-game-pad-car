radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, 128)
        xiamiBoard.OLEDshowUserText("Forward", 0, 0)
    } else if (receivedNumber == 8) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 128)
        xiamiBoard.OLEDshowUserText("Backward", 0, 0)
    } else if (receivedNumber == 14) {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.motorStop(MOTOR.M3)
        xiamiBoard.motorStop(MOTOR.M4)
        xiamiBoard.OLEDshowUserText("Stop", 0, 0)
    } else if (receivedNumber == 4) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 128)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 64)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 64)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, 128)
        xiamiBoard.OLEDshowUserText("Turn left", 0, 0)
    } else if (receivedNumber == 10) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 64)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 128)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, 64)
        xiamiBoard.OLEDshowUserText("Turn right", 0, 0)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
xiamiBoard.IR_callbackUser(function (IR) {
    basic.showString("" + (xiamiBoard.IR_read()))
    basic.pause(2000)
    IR = xiamiBoard.IR_read()
})
let IR = xiamiBoard.IR_read()
xiamiBoard.initXiaMiBoard()
basic.showIcon(IconNames.Chessboard)
radio.setGroup(121)
xiamiBoard.OLEDclear()
basic.forever(function () {
	
})
