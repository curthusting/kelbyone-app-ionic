import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgZone } from '@angular/core';

//  KelbyOne Pages
import { CoursesPage } from '../pages/courses/courses';

import { DiscountsPage } from '../pages/discounts/discounts';
import { TracksPage } from '../pages/tracks/tracks';
import { MagazinesPage } from '../pages/magazines/magazines';
import { WebcastsPage } from '../pages/webcasts/webcasts';
import { InstructorsPage } from '../pages/instructors/instructors';

import {ViewChild} from '@angular/core';

@Component({
  templateUrl: 'app.html'
})

export class KelbyOneApp {
  @ViewChild('myNav') nav

  rootPage: any
  pages: any[]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private zone: NgZone) {
    this.rootPage = CoursesPage;

    this.pages = [
      { title: 'Courses', icon: 'play', component: CoursesPage },
      { title: 'Tracks', icon: 'train', component: TracksPage },
      { title: 'Webcasts', icon: 'videocam', component: WebcastsPage },
      { title: 'Magazines', icon: 'book', component: MagazinesPage },
      { title: 'Instructors', icon: 'contacts', component: InstructorsPage },
      { title: 'Discounts', icon: 'tags', component: DiscountsPage }
    ];
  }

  openPage(page) {
    this.zone.run(() => {
      this.nav.push(page.component);
    })
  }
}
