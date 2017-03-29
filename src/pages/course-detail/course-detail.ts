import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { ApiService } from '../service/api-service';

@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
  providers: [ApiService]
})
export class CourseDetailPage {
  course: any;
  lessons: any[];

  display: string = "about";

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private apiService: ApiService) {
    this.course = navParams.get('course');
    this.apiService.getCourseLessons(this.course.id).subscribe(
      data => {
        this.lessons = this.apiService.formatData(data).lessons;
      },
      err => {
        console.log(err);
      },
      () => console.log('API Response Complete')
    );
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }

}
