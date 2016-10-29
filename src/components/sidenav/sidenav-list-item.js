import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Colors, MediaQueries } from '../../config';


const styles = StyleSheet.create({
    item: {
        textAlign: 'center',
        borderBottom: '1px solid white',

        [MediaQueries.DESKTOP]: {
            borderBottom: 'none',
            textAlign: 'right',
        },
    },

    link: { 
        display: 'block',
        padding: '1em 0',
        color: 'white',

        ':hover': {
            background: Colors.NAVBAR_BG_HIGHLIGHTED,
        },

        ':active': {
            background: Colors.NAVBAR_BG_HIGHLIGHTED,
        },

        [MediaQueries.DESKTOP]: {
            fontSize: '1.5em',
            padding: '.5em 0',
            transition: 'font-size .1s ease-in-out',

            ':active': {
                background: 'none',
                fontSize: '1.8em',
            },

            ':hover': {
                background: 'none',
                fontSize: '1.8em',
            },
        },
    },

    activeLink: {
        background: Colors.NAVBAR_BG_HIGHLIGHTED,

        [MediaQueries.DESKTOP]: {
            background: 'none',
            fontSize: '1.8em',
        },
    },

    text: {
        [MediaQueries.DESKTOP]: {
            ':after': { content: '" ―"' },
        },
    },
});

export const SidenavListItem = ({ link, isActive = false }) => (
    <li className={ css(styles.item) }>
        <a className={ css(styles.link, isActive && css(styles.activeLink)) } href={link.href}>
            <span className={ css(styles.text) }> {link.text} </span>
        </a>
    </li>
);