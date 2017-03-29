import {Http} from '@angular/http';

export class ApiService {
  static get parameters() {
    return [[Http]];
  }

  isLoading = null;

  constructor(private http: Http) {
  }

  getResourse(resourceName) {
    if (this.isLoading) return;
    this.isLoading = true;
    var url = 'http://kelbyone/wp-json/ko/v2/' + resourceName + '/';
    var response = this.http.get(url);
    this.isLoading = false;
    return response;
  }

  getCoursesByCategory(identifier) {
    if (this.isLoading) return;
    this.isLoading = true;
    var url = 'http://kelbyone/wp-json/ko/v2/categories/' + identifier + '/courses/';
    var response = this.http.get(url);
    this.isLoading = false;
    return response;
  }

  getCourseLessons(identifier) {
    if (this.isLoading) return;
    this.isLoading = true;
    var url = 'http://kelbyone/wp-json/ko/v2/courses/' + identifier + '/lessons/';
    var response = this.http.get(url);
    this.isLoading = false;
    return response;
  }

  formatData(data) {
    return JSON.parse(data['_body']).response;
  }
}
