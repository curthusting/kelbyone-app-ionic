import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { ApiService } from '../service/api-service';

import { CoursesPage } from '../courses/courses';

@Component({
  selector: 'page-category-dropdown',
  templateUrl: 'category-dropdown.html',
  providers: [ApiService]
})
export class CategoryDropdownPage {
  categories: any[];
  isLoaded = false
  constructor(public navCtrl: NavController, private apiService: ApiService, public viewCtrl: ViewController) {
    this.getCategories();
  }

  getCategories() {
    console.info(this.isLoaded, 'categories getCategories');
    if (this.isLoaded) {
      return;
    }
    this.apiService.getResourse('categories').subscribe(
      data => {
        this.isLoaded = true;
        this.categories = this.apiService.formatData(data).categories;
      },
      err => {
        console.log(err);
      },
      () => console.log('API Response Complete')
    );

    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDropdownPage');
  }

  categorySelected(category) {
    this.navCtrl.push(CoursesPage, {
      category: category
    })
  }
}
