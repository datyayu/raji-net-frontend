import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { MediaQueries } from '../../config';

import { SidenavListItem } from './sidenav-list-item';


const styles = StyleSheet.create({
    sidenavList: {
        display: 'flex',
        flexDirection: 'column',
   
        [MediaQueries.DESKTOP]: {
            height: 'calc(100vh - 300px - 4em)',
            justifyContent: 'center',
        },
    },
});


export const SidenavList = ({ links = [] }) => (
    <ul className={ css(styles.sidenavList) }>
        {
            links.map((link, idx) => <SidenavListItem key={idx} link={link} />)
        }
    </ul>
);