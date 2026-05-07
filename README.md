# RGB Sliders Extension

This MakeCode extension provides three sliders for **Red**, **Green**, and **Blue** values (0–255).

## Blocks
- **Set Red slider to**
- **Set Green slider to**
- **Set Blue slider to**
- **Red slider value**
- **Green slider value**
- **Blue slider value**
- **RGB color** — returns a packed color number

## Example
```blocks
rgbSliders.setRed(255)
rgbSliders.setGreen(128)
rgbSliders.setBlue(64)
let color = rgbSliders.getColor()
scene.setBackgroundColor(color)
