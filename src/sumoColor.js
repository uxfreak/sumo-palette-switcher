import diff from 'color-diff'
import hexRgb from 'hex-rgb'
import rgbHex from 'rgb-hex'
const palette = [
    {
        "name": "black-10",
        "color": "#7E8EA6"
    },
    {
        "name": "black-20",
        "color": "#687B96"
    },
    {
        "name": "black-30",
        "color": "#546685"
    },
    {
        "name": "black-40",
        "color": "#435575"
    },
    {
        "name": "black-50",
        "color": "#344666"
    },
    {
        "name": "black-60",
        "color": "#233654"
    },
    {
        "name": "black-70",
        "color": "#1D2B45"
    },
    {
        "name": "black-80",
        "color": "#1A253B"
    },
    {
        "name": "black-90",
        "color": "#151E30"
    },
    {
        "name": "black-100",
        "color": "#101827"
    },
    {
        "name": "grey-10",
        "color": "#CEDEEB"
    },
    {
        "name": "grey-20",
        "color": "#B6C9D9"
    },
    {
        "name": "grey-30",
        "color": "#9DB4C7"
    },
    {
        "name": "grey-40",
        "color": "#84A1B8"
    },
    {
        "name": "grey-50",
        "color": "#6D8DA6"
    },
    {
        "name": "grey-60",
        "color": "#517691"
    },
    {
        "name": "grey-70",
        "color": "#3C6482"
    },
    {
        "name": "grey-80",
        "color": "#315775"
    },
    {
        "name": "grey-90",
        "color": "#2E506B"
    },
    {
        "name": "grey-100",
        "color": "#244159"
    },
    {
        "name": "white-10",
        "color": "#FFFFFF"
    },
    {
        "name": "white-20",
        "color": "#FAFAFA"
    },
    {
        "name": "white-30",
        "color": "#F5F8FA"
    },
    {
        "name": "white-40",
        "color": "#EBEFF2"
    },
    {
        "name": "white-50",
        "color": "#E6EAED"
    },
    {
        "name": "white-60",
        "color": "#DFE4E8"
    },
    {
        "name": "white-70",
        "color": "#D5DADE"
    },
    {
        "name": "white-80",
        "color": "#C9D0D6"
    },
    {
        "name": "white-90",
        "color": "#B9C2C9"
    },
    {
        "name": "white-100",
        "color": "#B0B8BF"
    },
    {
        "name": "primary-10",
        "color": "#E3EDFF"
    },
    {
        "name": "primary-20",
        "color": "#C9DDFF"
    },
    {
        "name": "primary-30",
        "color": "#A0C1FA"
    },
    {
        "name": "primary-40",
        "color": "#6A9EF7"
    },
    {
        "name": "primary-50",
        "color": "#4885F0"
    },
    {
        "name": "primary-60",
        "color": "#2063D6"
    },
    {
        "name": "primary-70",
        "color": "#1D59C2"
    },
    {
        "name": "primary-80",
        "color": "#0944AB"
    },
    {
        "name": "primary-90",
        "color": "#093582"
    },
    {
        "name": "primary-100",
        "color": "#002970"
    },
    {
        "name": "ocean-10",
        "color": "#DDF0F9"
    },
    {
        "name": "ocean-20",
        "color": "#BAE3F5"
    },
    {
        "name": "ocean-30",
        "color": "#7FCAEB"
    },
    {
        "name": "ocean-40",
        "color": "#3EAEDE"
    },
    {
        "name": "ocean-50",
        "color": "#0692CF"
    },
    {
        "name": "ocean-60",
        "color": "#0072A3"
    },
    {
        "name": "ocean-70",
        "color": "#03658F"
    },
    {
        "name": "ocean-80",
        "color": "#005275"
    },
    {
        "name": "ocean-90",
        "color": "#003E59"
    },
    {
        "name": "ocean-100",
        "color": "#00344D"
    },
    {
        "name": "evergreen-10",
        "color": "#DAF2E4"
    },
    {
        "name": "evergreen-20",
        "color": "#B9EBCD"
    },
    {
        "name": "evergreen-30",
        "color": "#82CFA1"
    },
    {
        "name": "evergreen-40",
        "color": "#55B57B"
    },
    {
        "name": "evergreen-50",
        "color": "#2B9E59"
    },
    {
        "name": "evergreen-60",
        "color": "#058036"
    },
    {
        "name": "evergreen-70",
        "color": "#0F6E35"
    },
    {
        "name": "evergreen-80",
        "color": "#075928"
    },
    {
        "name": "evergreen-90",
        "color": "#02451D"
    },
    {
        "name": "evergreen-100",
        "color": "#003816"
    },
    {
        "name": "magenta-10",
        "color": "#FCE8F5"
    },
    {
        "name": "magenta-20",
        "color": "#FFCFED"
    },
    {
        "name": "magenta-30",
        "color": "#F5A6D8"
    },
    {
        "name": "magenta-40",
        "color": "#F07AC5"
    },
    {
        "name": "magenta-50",
        "color": "#DB53A9"
    },
    {
        "name": "magenta-60",
        "color": "#C2308D"
    },
    {
        "name": "magenta-70",
        "color": "#B31077"
    },
    {
        "name": "magenta-80",
        "color": "#940760"
    },
    {
        "name": "magenta-90",
        "color": "#730049"
    },
    {
        "name": "magenta-100",
        "color": "#61003D"
    },
    {
        "name": "critical-10",
        "color": "#FFE7E6"
    },
    {
        "name": "critical-20",
        "color": "#FFD8D6"
    },
    {
        "name": "critical-30",
        "color": "#F7ABA6"
    },
    {
        "name": "critical-40",
        "color": "#F77D74"
    },
    {
        "name": "critical-50",
        "color": "#F75A4F"
    },
    {
        "name": "critical-60",
        "color": "#D63A2E"
    },
    {
        "name": "critical-70",
        "color": "#BF2206"
    },
    {
        "name": "critical-80",
        "color": "#A61C00"
    },
    {
        "name": "critical-90",
        "color": "#851600"
    },
    {
        "name": "critical-100",
        "color": "#701300"
    },
    {
        "name": "warning-10",
        "color": "#F7F4C3"
    },
    {
        "name": "warning-20",
        "color": "#F5E99F"
    },
    {
        "name": "warning-30",
        "color": "#E3C45F"
    },
    {
        "name": "warning-40",
        "color": "#E39F22"
    },
    {
        "name": "warning-50",
        "color": "#D67302"
    },
    {
        "name": "warning-60",
        "color": "#C95100"
    },
    {
        "name": "warning-70",
        "color": "#AD3D00"
    },
    {
        "name": "warning-80",
        "color": "#943400"
    },
    {
        "name": "warning-90",
        "color": "#782A00"
    },
    {
        "name": "warning-100",
        "color": "#662400"
    },
    {
        "name": "success-10",
        "color": "#E3F7CD"
    },
    {
        "name": "success-20",
        "color": "#D3F2B1"
    },
    {
        "name": "success-30",
        "color": "#A5D96F"
    },
    {
        "name": "success-40",
        "color": "#78BD31"
    },
    {
        "name": "success-50",
        "color": "#569E0D"
    },
    {
        "name": "success-60",
        "color": "#348700"
    },
    {
        "name": "success-70",
        "color": "#2C7300"
    },
    {
        "name": "success-80",
        "color": "#256100"
    },
    {
        "name": "success-90",
        "color": "#1D4D00"
    },
    {
        "name": "success-100",
        "color": "#1A4500"
    }
]

const get_rgbObject = (hexColor) => {
    let rgbcolor = hexRgb(hexColor)
    let rgbObject = {
        R: rgbcolor.red,
        G: rgbcolor.green,
        B: rgbcolor.blue
    }
    return rgbObject
}

const paletteRGBList = palette.map(color => get_rgbObject(color.color))

const getClosestColor = (inputHex) => {
    const inputRGB = get_rgbObject(inputHex)
    const nearestColor = diff.closest(inputRGB, paletteRGBList)
    const nearestColorHex = `#${rgbHex(nearestColor.R, nearestColor.G, nearestColor.B)}`
    const indexInPaletteList = palette.findIndex(x => x.color.toLowerCase() === nearestColorHex)
    const nearestColorObject = palette[indexInPaletteList]
    return nearestColorObject
}

export default getClosestColor
