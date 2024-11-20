radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 255)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 255)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 255)
    } else if (receivedNumber == 8) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, 255)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, 255)
    } else if (receivedNumber == 4) {
        xiamiBoard.motorStop(MOTOR.M1)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
xiamiBoard.IR_callbackUser(function (IR) {
    basic.showString(convertToText(IR))
})
let IR = 0
xiamiBoard.initXiaMiBoard()
basic.showIcon(IconNames.Chessboard)
radio.setGroup(121)
xiamiBoard.OLEDclear()
basic.forever(function () {
    IR = xiamiBoard.IR_read()
})
