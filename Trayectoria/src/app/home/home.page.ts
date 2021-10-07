import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  page1(){
    console.log("fui a 1");
    this.router.navigate(['/abaout']);
  }
  page2(){
    console.log("fui a 2");
    this.router.navigate(['/abaout1']);
  }
  page3(){
    console.log("fui a 3");
    this.router.navigate(['/abaout2']);
  }
  page4(){
    console.log("fui a 4");
    this.router.navigate(['/abaout3']);
  }
  page5(){
    console.log("fui a 5");
    this.router.navigate(['/abaout4']);
  }
  page6(){
    console.log("fui a 6");
    this.router.navigate(['/abaout5']);
  }
  pageLogin(){
    console.log("fui a 6");
    this.router.navigate(['/login']);
  }
}
