/**
 * Slider Extension
 */
//% weight=100 color=#0fbc11 icon=""
namespace slider {
    let sliderValue = 50 // default value

    /**
     * Set slider value (0-100)
     * @param value the slider position, eg: 50
     */
    //% block="set slider to %value"
    //% value.min=0 value.max=100
    export function setSlider(value: number): void {
        if (value < 0) value = 0
        if (value > 100) value = 100
        sliderValue = value
    }

    /**
     * Get current slider value (0-100)
     */
    //% block="slider value"
    export function getSlider(): number {
        return sliderValue
    }
}
