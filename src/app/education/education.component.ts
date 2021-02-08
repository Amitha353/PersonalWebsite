import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  smallNav: boolean = false;

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
  showNav() {
    this.smallNav = !this.smallNav;
  }
}
