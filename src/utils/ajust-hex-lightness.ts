export function adjustHexLightness(hex: string, amount: number) {
  // Remove the leading # if present
  hex = hex.replace("#", "");

  // Convert hex to RGB
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Convert RGB to HSL
  let hsl: number[] = rgbToHsl(red, green, blue);

  // Adjust the lightness value
  hsl[2] = Math.min(1, Math.max(0, hsl[2] + amount));

  // Convert HSL to RGB
  const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

  // Convert RGB to hexadecimal
  const newHex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return `#${newHex}`;
}

function rgbToHsl(red: number, green: number, blue: number): number[] {
  red /= 255;
  green /= 255;
  blue /= 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let hue = 0;
  let lightness = 0;
  let saturation = 0;

  lightness = (max + min) / 2;

  if (max === min) {
    hue = saturation = 0; // achromatic
  } else {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      case blue:
        hue = (red - green) / delta + 4;
        break;
    }

    hue /= 6;
  }

  return [hue, saturation, lightness];
}

function hslToRgb(hue: number, saturation: number, lightness: number) {
  let red, green, blue;

  if (saturation === 0) {
    red = green = blue = lightness; // achromatic
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }

  return [
    Math.round(red * 255),
    Math.round(green * 255),
    Math.round(blue * 255),
  ];
}

function rgbToHex(red: number, green: number, blue: number) {
  return ((1 << 24) | (red << 16) | (green << 8) | blue)
    .toString(16)
    .slice(1)
    .toUpperCase();
}
