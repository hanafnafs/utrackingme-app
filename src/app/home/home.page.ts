import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  onBtnClicked(type){
    let temp = { type: type }
    this.router.navigate(['iframe'], { queryParams: temp });
    // this.router.navigate('IframePage')
  }
}
