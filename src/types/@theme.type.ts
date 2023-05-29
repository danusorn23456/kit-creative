export type RolePalette =
  | "primary"
  | "secondary"
  | "positive"
  | "notice"
  | "info"
  | "negative"
  | "background"
  | "surface";

export type ElementPalette = "text" | "background" | "";

export type StatusPalette = "lighter" | "light" | "base" | "dark" | "darker";

export type StatusPaletteRecord = Record<StatusPalette, string>;

export type ThemePalette = Record<RolePalette, StatusPaletteRecord>;

export type Tones = {
  emp: string;
  default: string;
  sub: string;
  pale: string;
};
