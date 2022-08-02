import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player)

player.on('timeupdate', throttle(function({seconds}) {
    console.log(seconds);
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}, 1000))

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));