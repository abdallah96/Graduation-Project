import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ClassroomService } from '../shared/classroom.service';
import { Location } from '@angular/common';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isLoggedIn$;
  userDetails;
  classrooms = [];

  constructor(private router:Router, private service: UserService, private classroomService: ClassroomService, private location: Location) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
      this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      this.router.events.subscribe((val) => {
        this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      });
    }, 10);

  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn$ = false;
  }
  
  getByClassroomSearch(){
    this.classroomService.findClassroom().subscribe(res => {
      console.log(res);
      this.classrooms = res as []
    });
  }
  practice(){
    this.location.replaceState('src/app//practice/index.html')
  }
  
}
