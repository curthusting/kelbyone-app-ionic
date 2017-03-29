import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
// helpers
// import {TruncateString} from '../../pipes/truncate-string.pipe';
// import {Duration} from '../../pipes/duration.pipe';
// pages
import { CourseDetailPage } from '../course-detail/course-detail';
import { CategoryDropdownPage } from '../category-dropdown/category-dropdown';
// services
import { ApiService } from '../service/api-service';
import { LoadingService } from '../service/loading-service';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  providers: [ApiService, LoadingService]
})
export class CoursesPage {
  category: any;
  courses: any[];
  
  popover = this.popoverCtrl.create(CategoryDropdownPage);

  private firstLoaded: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private apiService: ApiService, private loadingService: LoadingService) {
    this.category = navParams.get('category');

    console.info('constructor', this.firstLoaded)
    if (!this.firstLoaded) {

      if (this.category) {
        this.apiService.getCoursesByCategory(this.category.id).subscribe(
          data => {
            this.courses = this.apiService.formatData(data).courses;
          },
          err => {
            console.log(err);
          },
          () => this.loadingService.hide("coursesLoad"+this.category.display_name)
        );
      } else {
        this.category = {
          display_name: "All Categories"
        }
        this.apiService.getResourse('courses').subscribe(
          data => {
            this.courses = this.apiService.formatData(data).courses;
          },
          err => {
            console.log(err);
          },
          () => this.loadingService.hide("coursesLoad"+this.category.display_name)
        );
      }
    }
    this.firstLoaded = true;
  }

  ionViewDidLoad() {
      console.info('ionViewDidLoad',this.loadingService, "coursesLoad"+this.category.display_name)
    this.loadingService.show("coursesLoad"+this.category.display_name, "Loading courses...");
  }

  itemSelected(course) {
    this.navCtrl.push(CourseDetailPage, {
      course: course
    })
  }

  showCategories(myEvent) {
    this.popover.present({
      ev: myEvent
    });
  }
}
