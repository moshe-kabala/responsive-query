import { ScreenTypes } from "./screen_types";



export const ScreenSizes =  {
    [ScreenTypes.BigDesktop]: {from: 1800, to: 100000}, // some big value
    [ScreenTypes.Desktop]: {from:1200, to: 1800 },
    [ScreenTypes.TabletLandscape]: {from:940 ,to: 1200},
    [ScreenTypes.TabletPortrait]: {from:640 ,to: 940},
    [ScreenTypes.Smartphone]: { to: 640, from : 1}, 
}
