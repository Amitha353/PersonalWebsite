import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

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
}
