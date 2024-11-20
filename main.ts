radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, 255)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, 255)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
basic.showIcon(IconNames.Chessboard)
radio.setGroup(121)
basic.forever(function () {
	
})
