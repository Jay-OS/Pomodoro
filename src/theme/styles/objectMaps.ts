import { CSSProperties } from 'aphrodite';

interface IFontFace {
    fontFamily: string,
    src: string,
    fontStyle?: string | undefined,
    fontWeight?: string | number | undefined
};

export interface styleMapProperties {
    readonly [styleName: string]: CSSProperties
}

export interface individualPropertyConstants {
    readonly [property: string]: string
}

export interface fontFaceProperties {
    readonly [styleName: string]: IFontFace
}
