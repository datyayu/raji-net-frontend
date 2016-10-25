var $navbar = document.querySelector('.navbar');
var $header = document.querySelector('.header');
var $playlist = document.querySelector('.playlist');
var $overlay = document.querySelector('.application-overlay');
var $sidebarTogglers = document.querySelectorAll('.js-toggle-sidenav');
var $searchTogglers = document.querySelectorAll('.js-toggle-search');
var $playlistTogglers = document.querySelectorAll('.js-playlist-search');
function toggleSidenav() {
    if ($navbar.classList.contains('is-active')) {
        $navbar.classList.remove('is-active');
        $overlay.classList.remove('is-active');
    }
    else {
        $navbar.classList.add('is-active');
        $overlay.classList.add('is-active');
    }
}
function toggleSearch() {
    if ($header.classList.contains('has-search'))
        $header.classList.remove('has-search');
    else
        $header.classList.add('has-search');
}
function togglePlaylist() {
    if ($playlist.classList.contains('is-active')) {
        $playlist.classList.remove('is-active');
        $overlay.classList.remove('is-active');
    }
    else {
        $playlist.classList.add('is-active');
        $overlay.classList.add('is-active');
    }
}
Array.prototype.forEach.call($sidebarTogglers, function (node) {
    node.addEventListener('click', toggleSidenav);
});
Array.prototype.forEach.call($searchTogglers, function (node) {
    node.addEventListener('click', toggleSearch);
});
Array.prototype.forEach.call($playlistTogglers, function (node) {
    node.addEventListener('click', togglePlaylist);
});
