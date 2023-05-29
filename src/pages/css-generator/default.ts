import { ThemePalette } from "~/types/@theme.type";

const defaultThemePalette: ThemePalette = {
  primary: {
    darker: "#00854B",
    dark: "#00B868",
    base: "#00EB85",
    light: "#1FFF9E",
    lighter: "#52FFB4",
  },
  secondary: {
    darker: "#0635A3",
    dark: "#0745D5",
    base: "#185BF7",
    light: "#497EF9",
    lighter: "#7BA1FA",
  },
  background: {
    darker: "#171717",
    dark: "#313131",
    base: "#4A4A4A",
    light: "#646464",
    lighter: "#7D7D7D",
  },
  surface: {
    darker: "#9E9E9E",
    dark: "#B8B8B8",
    base: "#D1D1D1",
    light: "#EBEBEB",
    lighter: "#FFFFFF",
  },
  info: {
    darker: "#004299",
    dark: "#0058CC",
    base: "#006EFF",
    light: "#338BFF",
    lighter: "#66A8FF",
  },
  notice: {
    darker: "#754400",
    dark: "#A86200",
    base: "#DB8000",
    light: "#FF9B0F",
    lighter: "#FFB042",
  },
  positive: {
    darker: "#175700",
    dark: "#258A00",
    base: "#32BD00",
    light: "#3FF000",
    lighter: "#5EFF24",
  },
  negative: {
    darker: "#6F2020",
    dark: "#972B2B",
    base: "#BF3636",
    light: "#D05858",
    lighter: "#DB8080",
  },
};

export { defaultThemePalette };
