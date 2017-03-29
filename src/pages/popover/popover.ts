import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `

      <ion-list>
        <ion-list-header>Video Options</ion-list-header>
        <button ion-item clear small icon-right>
        Download
      <ion-icon name='download' item-right></ion-icon>
        </button>

      </ion-list>

    <ion-list radio-group [(ngModel)]="speed">
    <ion-list-header>Playback Speed</ion-list-header>
      <ion-item>
        <ion-label>Normal</ion-label>
        <ion-radio value="1" checked></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>1.5x</ion-label>
        <ion-radio value="1.5"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>2x</ion-label>
        <ion-radio value="2"></ion-radio>
      </ion-item>
    </ion-list>

    <ion-list radio-group [(ngModel)]="options">
        <ion-list-header>Playback Options</ion-list-header>
      <ion-item>
        <ion-label>Stream Videos</ion-label>
        <ion-radio value="stream" checked></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Buffer Videos</ion-label>
        <ion-radio value="buffer"></ion-radio>
      </ion-item>
      <div padding>
      <p>Use the buffer playback option if you are experiencing problems with stuttering video.</p>
      </div>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
