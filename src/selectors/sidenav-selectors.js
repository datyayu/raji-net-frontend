export class SidenavSelectors {
    static isActive(state) {
        return false;
    }

    static getLinks(state) {
        return [
            { text: 'now playing', href: '/player' },
            { text: 'series',      href: '/series' },
            { text: 'playlists',   href: '/playlists' },
            { text: 'seasons',     href: '/seasons' },
        ];
    }
}