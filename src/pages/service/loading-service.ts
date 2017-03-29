/**
 * Usage:
 *
 *  //create loading service instance
 *  private LoadingService:LoadingService;
 *
 *  //this is how you show the loading instance
 *  LoadingService.show("someRandomNameOfTheLoading","Message in the Loading instance");
 *
 *
 *  setTimeout(
 *  () => {
 *
 *      //this is an example of how you kill the loading instance
 *      LoadingService.hide("someRandomNameOfTheLoading");
 *  },
 *  2000
 *  )
 */

import {Injectable} from '@angular/core';
import {LoadingController, Loading} from 'ionic-angular';

@Injectable()
export class LoadingService {

    private loaderList:Array<Loading> = [];

    constructor(private loadingCtrl:LoadingController) {
        // console.log('Hello LoadingService Provider');
    }

    /**
     * Creates a loading instance and present it
     * @param id
     * @param msg
     */
    public show(id, msg = 'Please wait...') {
        if(!this.loaderList[id]) this.loaderList[id] = this.loadingCtrl.create({
            content: msg,
            showBackdrop: false
        });
        console.info('show', id)
        this.loaderList[id].present();
    }

    /**
     * Hide and then automatically remove the loading instance
     * @param id
     * @returns {Promise<any>}
     */
    public hide(id) {
        let prom = this.loaderList[id].dismiss();
            prom.then(
                ()=> { this.remove(id); }
            );

        return prom;
    }

    /**
     * Call `remove` to manually remove the loading instance
     * @param id
     */

    //normally you don't manually use this method, better use the method -> hide()
    public remove(id) {
        delete this.loaderList[id];
    }

}
