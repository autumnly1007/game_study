'use strict';

import {GameBuilder, Reason} from './game.js';
import * as sound from './sound.js';
import PopUp from './popup.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .gameDuration(10)
    .carrotCount(10)
    .bugCount(5)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch (reason) {
        case Reason.cancel:
            message = 'REPLAY?';
            sound.playAlert();
            break;
        case Reason.win:
            message = 'YOU WON!';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'YOU LOSE!';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');
    }
    
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});