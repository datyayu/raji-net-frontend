import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Colors, MediaQueries } from '../../config';

import logoSVG from '../../assets/images/logo.svg';


const styles = StyleSheet.create({
    logo: {
        display: 'block',
        color: 'white',
        borderBottom: '1px solid white',
        padding: '.25em 0',

        ':hover': { background: Colors.NAVBAR_BG_HIGHLIGHTED },
        ':active': { background: Colors.NAVBAR_BG_HIGHLIGHTED },
   
        [MediaQueries.DESKTOP]: {
            borderBottom: 'none',
            padding: 0,
            margin: '1em 0',

            ':hover': { background: 'none' },
            ':active': { background: 'none' },
        },
    },

    text: {
        fontSize: '2em',
        fontWeight: 'lighter',
        textAlign: 'center',
        padding: '.25em 0',
        margin: 0,

        [MediaQueries.DESKTOP]: {
            display: 'none',
        },
    },

    image: {
        display: 'none',
        width: '100px',
        margin: '0 auto',

        [MediaQueries.DESKTOP]: {
            width: '150px',
            display: 'block',
        },
    },
});


export const SidenavLogo = () => (
    <a className={ css(styles.logo) } href="#">
        <h1 className={ css(styles.text) }>raji</h1>
        <img className={ css(styles.image) } src={logoSVG} alt="Raji logo" />
    </a>
);