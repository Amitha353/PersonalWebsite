import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  isSgExp: boolean = true;
  isGraExp: boolean = true;
  smallNav: boolean = false;

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  sgExperience() {
    this.isSgExp = !this.isSgExp;
  }

  graExperience() {
    this.isGraExp = !this.isGraExp;
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
  
  showNav() {
    this.smallNav = !this.smallNav;
  }
}
