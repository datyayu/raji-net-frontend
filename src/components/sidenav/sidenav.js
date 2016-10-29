import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Colors, MediaQueries } from '../../config';

import { SidenavList } from './sidenav-list';
import { SidenavLogo } from './sidenav-logo';


const styles = StyleSheet.create({
    navbar: {
        background: Colors.NAVBAR_BG,
        height: '100vh',
        width: '75vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9,
        boxShadow: `0px 0px 4px 2px ${Colors.BOX_SHADOW}`,
        transform: 'translateX(-80vw)',
        transition: 'transform 300ms ease-in-out',
        willChange: 'transform',

        [MediaQueries.TABLET]: {
            width: '50vw',
        },

        [MediaQueries.DESKTOP]: {
            transform: 'translateX(0vw)',
            willChange: 'auto',
            width: '200px',
        },
    },

    active: {
        transform: 'translateX(0vw)',
    },
});


export const Sidenav = ({ links = [], isActive = true }) => (
    <div className={ css(styles.navbar, isActive && styles.active) }>
        <nav className="navbar-nav">
            <SidenavLogo />
            <SidenavList links={links} />
        </nav>
    </div>
);