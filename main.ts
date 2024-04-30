//% color=#0fbc11 weight=96 icon="\uf1b9" groups='["Sensor", "Motor"]'
namespace INC111 {

    /**
    * Control Motor left and right.
    * @param m the m from -100 (min) to 100 (max), eg:0
    * @param n the n from -100 (min) to 100 (max), eg:0
    */
    //% group="Motor"
    //% blockId=motorbit_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-100 m.max=100
    //% n.min=-100 n.max=100
    export function freestyle(m: number, n: number): void {
        // Add code here
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)

        if (m = 0)
        {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        else if (m > 0) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.analogWritePin(AnalogPin.P8, m * 1023 / 100)
        }
        else {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.analogWritePin(AnalogPin.P8, - m * 1023 / 100)
        }

        if (n = 0) {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
        else if (n > 0) {
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P16, 0)
            pins.analogWritePin(AnalogPin.P12, n * 1023 / 100)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 1)
            pins.analogWritePin(AnalogPin.P12, - n * 1023 / 100)
        }

    }

    /**
     * Get the Infrared sensor in Pin 1 (0 to 1023).
     */
    //% group="Sensor"
    //% blockId=ir1_received_packet block="IR1 "
    export function IR1_received() {
        return pins.analogReadPin(AnalogPin.P1);
    }

    /**
    * Get the Infrared sensor in Pin 2 (0 to 1023).
    */
    //% group="Sensor"
    //% blockId=ir2_received_packet block="IR2 "
    export function IR2_received() {
        return pins.analogReadPin(AnalogPin.P2);
    }

    /**
    * Get the Infrared sensor in Pin 3 (0 to 1023).
    */
    //% group="Sensor"
    //% blockId=ir3_received_packet block="IR3 "
    export function IR3_received() {
        return pins.analogReadPin(AnalogPin.P3);
    }

    /**
    * Get the Infrared sensor in Pin 4 (0 to 1023).
    */
    //% group="Sensor"
    //% blockId=ir4_received_packet block="IR4 "
    export function IR4_received() {
        return pins.analogReadPin(AnalogPin.P4);
    }

}

