import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  isfraud: boolean = true;
  isbitcoin: boolean = true;
  smallNav: boolean = false;

  constructor(private screenService: ScreenService) { }
  
  fraudDetect() {
    this.isfraud = !this.isfraud;
  }

  bitcoinDetect() {
    this.isbitcoin = !this.isbitcoin;
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
  
  showNav() {
    this.smallNav = !this.smallNav;
  }
}
