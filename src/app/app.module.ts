import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { KelbyOneApp } from './app.component';

import { PopoverPage } from '../pages/popover/popover';

import { CategoryDropdownPage } from '../pages/category-dropdown/category-dropdown';

import { TruncateString } from '../pipes/truncate-string.pipe';
import { Duration } from '../pipes/duration.pipe';

//  KelbyOne Pages
import { CoursesPage } from '../pages/courses/courses';
import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { DiscountsPage } from '../pages/discounts/discounts';
import { TracksPage } from '../pages/tracks/tracks';
import { MagazinesPage } from '../pages/magazines/magazines';
import { WebcastsPage } from '../pages/webcasts/webcasts';
import { InstructorsPage } from '../pages/instructors/instructors';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    KelbyOneApp,

    PopoverPage,
    CategoryDropdownPage,
    //
    CoursesPage,
    CourseDetailPage,
    DiscountsPage,
    TracksPage,
    MagazinesPage,
    WebcastsPage,
    InstructorsPage,
    //
    TruncateString,
    Duration
  ],
  imports: [
    IonicModule.forRoot(KelbyOneApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    KelbyOneApp,
    CoursesPage,

    PopoverPage,
    CategoryDropdownPage,
    //
    CourseDetailPage,
    DiscountsPage,
    TracksPage,
    MagazinesPage,
    WebcastsPage,
    InstructorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {

}
