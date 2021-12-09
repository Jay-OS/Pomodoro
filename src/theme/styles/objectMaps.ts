import { CSSProperties } from 'aphrodite';

export interface styleMapProperties {
    readonly [styleName: string]: CSSProperties
}

export interface individualPropertyConstants {
    readonly [property: string]: string
}
