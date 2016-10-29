const TABLET_SIZE          = '480px';
const PHONE_LANDSCAPE_SIZE = '640px';
const DESKTOP_SIZE         = '780px';
const HD_DESKTOP_SIZE      = '1025px';


export const PHONE_LANDSCAPE = 
    `@media screen and (orientation: landscape) and (max-width: ${PHONE_LANDSCAPE_SIZE})`;

export const TABLET_LANDSCAPE = 
    `@media screen and (orientation: landscape) and (max-width: ${DESKTOP_SIZE})`;

export const TABLET = 
    `@media screen and (min-width: ${TABLET_SIZE})`;

export const DESKTOP =
    `@media screen and (min-width: ${DESKTOP_SIZE})`;

export const HD_DESKTOP =
    `@media screen and (min-width: ${HD_DESKTOP_SIZE})`;