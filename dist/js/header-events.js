var $navbar = document.querySelector('.navbar');
var $header = document.querySelector('.header');
var $playlist = document.querySelector('.playlist');
var $overlay = document.querySelector('.js-application-overlay');
var $body = document.body;
var $sidebarTogglers = document.querySelectorAll('.js-toggle-sidenav');
var $searchTogglers = document.querySelectorAll('.js-toggle-search');
var $playlistTogglers = document.querySelectorAll('.js-toggle-playlist');
var hasPlaylistCloseListener = false;
function toggleSidenav() {
    $navbar.classList.add('is-active');
    $overlay.classList.add('is-active');
}
function toggleSearch() {
    if ($header.classList.contains('has-search'))
        $header.classList.remove('has-search');
    else
        $header.classList.add('has-search');
}
function togglePlaylist() {
    function closePlaylist() {
        $playlist.classList.remove('is-active');
        $overlay.classList.remove('is-active');
        $body.removeEventListener('click', closePlaylist, false);
        $body.removeEventListener('click', closePlaylist, false);
        hasPlaylistCloseListener = false;
    }
    function openPlaylist() {
        $playlist.classList.add('is-active');
        $overlay.classList.add('is-active');
        $body.addEventListener('click', closePlaylist, false);
        hasPlaylistCloseListener = true;
    }
    if (!hasPlaylistCloseListener) {
        setTimeout(openPlaylist, 50);
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
$overlay.addEventListener('click', function (event) {
    var $activeElements = document.querySelectorAll('.is-active');
    Array.prototype.forEach.call($activeElements, function (node) {
        node.classList.remove('is-active');
    });
});
