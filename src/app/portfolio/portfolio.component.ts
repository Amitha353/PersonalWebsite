import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  smallNav: boolean = false;

  constructor(private screenService: ScreenService) { }

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
