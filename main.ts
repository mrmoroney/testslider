/**
 * RGB Sliders Extension
 */
//% weight=100 color=#ff6600 icon=""
namespace rgbSliders {
    let rValue = 0
    let gValue = 0
    let bValue = 0

    /**
     * Set all RGB slider values (0–255 each)
     * @param r red value, eg: 255
     * @param g green value, eg: 128
     * @param b blue value, eg: 64
     */
    //% block="set RGB sliders to R %r G %g B %b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    export function setRGB(r: number, g: number, b: number): void {
        rValue = Math.max(0, Math.min(255, r))
        gValue = Math.max(0, Math.min(255, g))
        bValue = Math.max(0, Math.min(255, b))
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
