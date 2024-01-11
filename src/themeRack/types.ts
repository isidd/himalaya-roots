export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system'
}

export interface ThemeContextInterface {
    themeMode : ThemeMode,
    switchThemeMode : (mode:ThemeMode)=>void;
}