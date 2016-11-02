// @flow
import type { LinkModel } from '../models';


export class SidenavSelectors {
    static isActive(state): boolean {
        return false;
    }

    static getLinks(state): LinkModel[] {
        return [
            { text: 'now playing', href: '/player' },
            { text: 'series',      href: '/series' },
            { text: 'playlists',   href: '/playlists' },
            { text: 'seasons',     href: '/seasons' },
        ];
    }
}