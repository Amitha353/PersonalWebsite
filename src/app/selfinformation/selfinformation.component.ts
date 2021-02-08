import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-selfinformation',
  templateUrl: './selfinformation.component.html',
  styleUrls: ['./selfinformation.component.css']
})
export class SelfinformationComponent implements OnInit {
  smallNav: boolean = false;
  constructor(private router: Router, private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  redirectGit() {
    window.open("https://github.com/Amitha353", "_blank");
  }

  redirectLinkedIn() {
    window.open("https://www.linkedin.com/in/amitha-raghava-raju-61445980/", "_blank");
  }

  redirectFacebook() {
    window.open("https://www.facebook.com/amitha.raju.9/", "_blank");
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }

  showNav() {
    this.smallNav = !this.smallNav;
  }
}
