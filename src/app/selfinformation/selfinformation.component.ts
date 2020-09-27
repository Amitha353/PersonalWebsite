import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfinformation',
  templateUrl: './selfinformation.component.html',
  styleUrls: ['./selfinformation.component.css']
})
export class SelfinformationComponent implements OnInit {

  constructor(private router: Router) { }

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
