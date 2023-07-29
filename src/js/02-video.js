import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
const LS_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveCurrentPlayTime, 1000));

function saveCurrentPlayTime(data) {
    localStorage.setItem(LS_KEY, data.seconds);
}

player.setCurrentTime(JSON.parse(localStorage.getItem(LS_KEY))||0);
  

    