import { ThemePalette } from "~/types/@theme.type";

const defaultThemePalette: ThemePalette = {
  white: "#FFFFFF",
  black: "#000000",
  primary: {
    darker: "#008A4E",
    dark: "#00A35C",
    base: "#00D679",
    light: "#0AFF95",
    lighter: "#23FFA0",
  },
  secondary: {
    darker: "#0635A2",
    dark: "#073DBB",
    base: "#094DEC",
    light: "#316CF7",
    lighter: "#497EF8",
  },
  background: {
    darker: "#1F1F1F",
    dark: "#2B2B2B",
    base: "#454545",
    light: "#5F5F5F",
    lighter: "#6B6B6B",
  },
  surface: {
    darker: "#9C9C9C",
    dark: "#A9A9A9",
    base: "#C2C2C2",
    light: "#DBDBDB",
    lighter: "#E8E8E8",
  },
  info: {
    darker: "#0047A3",
    dark: "#0052BD",
    base: "#0068F0",
    light: "#2483FF",
    lighter: "#3E91FF",
  },
  notice: {
    darker: "#925602",
    dark: "#AB6402",
    base: "#DD8203",
    light: "#FC9C17",
    lighter: "#FCA730",
  },
  positive: {
    darker: "#1D6B01",
    dark: "#238401",
    base: "#31B701",
    light: "#3FEA01",
    lighter: "#48FE07",
  },
  negative: {
    darker: "#7F1F1F",
    dark: "#942424",
    base: "#BD2E2E",
    light: "#D34B4B",
    lighter: "#D85F5F",
  },
};

export { defaultThemePalette };
