import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machinelearning',
  templateUrl: './machinelearning.component.html',
  styleUrls: ['./machinelearning.component.css']
})
export class MachinelearningComponent implements OnInit {

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
