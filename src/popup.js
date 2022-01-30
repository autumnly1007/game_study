'use strict';

export default class popUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');

        this.popUpRefresh.addEventListener('click', () => {
            this._hide();
            this.onClick && this.onClick();
        });
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }    

    _hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}