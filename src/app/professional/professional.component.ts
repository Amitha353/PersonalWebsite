import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectGit() {
    window.location.href = "https://github.com/Amitha353";
  }

  redirectLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/amitha-raghava-raju-61445980/";
  }

  redirectFacebook() {
    window.location.href = "https://www.facebook.com/amitha.raju.9/";
  }

}
