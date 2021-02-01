import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  isSgExp: boolean = true;
  isGraExp: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sgExperience() {
    this.isSgExp = !this.isSgExp;
  }

  graExperience() {
    this.isGraExp = !this.isGraExp;
  }
}
