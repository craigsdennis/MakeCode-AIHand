bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    Bluetooth_command_character = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Dollar))
    // Debug log: Received command
    serial.writeString("Received: " + Bluetooth_command_character + "\n")
    command_type = StartbitV2.startbit_analyzeBluetoothCmd(Bluetooth_command_character)
    if (command_type == StartbitV2.startbit_getBluetoothCmdtype(StartbitV2.startbit_CmdType.VERSION)) {
        bluetooth.uartWriteString("CMD|0A|141|$")
    }
    if (command_type == StartbitV2.startbit_getBluetoothCmdtype(StartbitV2.startbit_CmdType.SERVO)) {
        servo_number = StartbitV2.startbit_getArgs(Bluetooth_command_character, 1)
        servo_angle = StartbitV2.startbit_getArgs(Bluetooth_command_character, 2)
        servo_runtime = StartbitV2.startbit_getArgs(Bluetooth_command_character, 3)
        if (servo_number == 1) {
            servo_number = 6
            servo_angle = 180 - servo_angle
        } else {
            servo_number = servo_number - 1
        }
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, servo_number, servo_angle, servo_runtime)
    }
    if (command_type == StartbitV2.startbit_getBluetoothCmdtype(StartbitV2.startbit_CmdType.GET_HAND_CMD)) {
        action = StartbitV2.startbit_getArgs(Bluetooth_command_character, 1)
        serial.writeString("Action is: " + action + "\n")
        if (action == 1) {
            bluetooth.uartWriteString("CMD|15|01|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 800)
        }
        if (action == 2) {
            bluetooth.uartWriteString("CMD|15|02|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 40, 800)
        }
        if (action == 3) {
            bluetooth.uartWriteString("CMD|15|03|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 40, 800)
        }
        if (action == 4) {
            bluetooth.uartWriteString("CMD|15|04|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 140, 800)
        }
        if (action == 5) {
            bluetooth.uartWriteString("CMD|15|05|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 140, 800)
        }
        if (action == 6) {
            bluetooth.uartWriteString("CMD|15|06|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 90, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 90, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 90, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 90, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 90, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 800)
        }
        if (action == 7) {
            bluetooth.uartWriteString("CMD|15|07|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 140, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 40, 800)
        }
        if (action == 8) {
            bluetooth.uartWriteString("CMD|15|08|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 800)
            basic.pause(2000)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 40, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 800)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 500)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 150, 500)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 500)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 120, 500)
        }
        if (action == 9) {
            bluetooth.uartWriteString("CMD|15|09|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 80, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 110, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 100, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
        }
        if (action == 10) {
            bluetooth.uartWriteString("CMD|15|10|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 400)
            basic.pause(400)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 110, 400)
            basic.pause(400)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 100, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 100, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 100, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 100, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 100, 200)
            basic.pause(500)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 40, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 200)
        }
        if (action == 11) {
            bluetooth.uartWriteString("CMD|15|11|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 100, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 100, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 80, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 85, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 100, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 100, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(400)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
        }
        // Wave
        if (action == 12) {
            bluetooth.uartWriteString("CMD|15|12|$")
            for (let index = 0; index < 3; index++) {
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 50, 200)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 300)
                basic.pause(400)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 55, 200)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 100, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 100, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 100, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 100, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 100, 300)
                basic.pause(400)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 60, 200)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 130, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 130, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 130, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 130, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 110, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 55, 200)
                basic.pause(400)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 50, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 300)
                StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 80, 300)
            }
        }
        // Fist
        if (action == 13) {
            bluetooth.uartWriteString("CMD|15|13|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
        }
        if (action == 14) {
            bluetooth.uartWriteString("CMD|15|14|$")
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 50, 200)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 120, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
        }
        if (action == 15) {
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 120, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 70, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
        }
        if (action == 16) {
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 300)
        }
        // Rockout
        if (action == 17) {
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 50, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 150, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 180, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 30, 300)
            basic.pause(300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 180, 300)
        }
        // Relaxed
        if (action == 18) {
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 130, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 130, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 130, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 130, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 130, 300)
            StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 180, 300)
        }
        // Ambient
        if (action == 19) {

        }
    }
})
let action = 0
let servo_runtime = 0
let servo_angle = 0
let servo_number = 0
let command_type = 0
let Bluetooth_command_character = ""
StartbitV2.startbit_Init()
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 90, 800)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 90, 800)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 90, 800)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 4, 90, 800)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 5, 90, 800)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 6, 90, 800)
// serial.redirectToUSB()
basic.pause(1000)
