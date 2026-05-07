/**
 * RGB Sliders Extension
 */
//% weight=100 color=#ff6600 icon=""
namespace rgbSliders {
    let rValue = 0
    let gValue = 0
    let bValue = 0

    /**
     * Set Red slider value (0–255)
     * @param value red value, eg: 128
     */
    //% block="set Red slider to %value"
    //% value.min=0 value.max=255
    export function setRed(value: number): void {
        rValue = Math.max(0, Math.min(255, value))
    }

    /**
     * Set Green slider value (0–255)
     * @param value green value, eg: 128
     */
    //% block="set Green slider to %value"
    //% value.min=0 value.max=255
    export function setGreen(value: number): void {
        gValue = Math.max(0, Math.min(255, value))
    }

    /**
     * Set Blue slider value (0–255)
     * @param value blue value, eg: 128
     */
    //% block="set Blue slider to %value"
    //% value.min=0 value.max=255
    export function setBlue(value: number): void {
        bValue = Math.max(0, Math.min(255, value))
    }

    /**
     * Get Red slider value
     */
    //% block="Red slider value"
    export function getRed(): number {
        return rValue
    }

    /**
     * Get Green slider value
     */
    //% block="Green slider value"
    export function getGreen(): number {
        return gValue
    }

    /**
     * Get Blue slider value
     */
    //% block="Blue slider value"
    export function getBlue(): number {
        return bValue
    }

    /**
     * Get combined RGB color number
     */
    //% block="RGB color"
    export function getColor(): number {
        return (rValue << 16) | (gValue << 8) | bValue
    }
}

