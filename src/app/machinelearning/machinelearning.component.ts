import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../shared/screen.service';

@Component({
  selector: 'app-machinelearning',
  templateUrl: './machinelearning.component.html',
  styleUrls: ['./machinelearning.component.css']
})
export class MachinelearningComponent implements OnInit {
  editBank: boolean= true;
  editSentiment: boolean= true;
  editRecommendation: boolean= true;
  editCharacter: boolean= true;
  editFatality: boolean= true;
  editQQ: boolean= true;
  leafWilt: boolean= true;
  smallNav: boolean = false;

  constructor(private screenService: ScreenService) { }

  ngOnInit(): void {
  }

  // redirectGit() {
  //   window.open("https://github.com/Amitha353", "_blank");
  // }

  // redirectLinkedIn() {
  //   window.open("https://www.linkedin.com/in/amitha-raghava-raju-61445980/", "_blank");
  // }

  // redirectFacebook() {
  //   window.open("https://www.facebook.com/amitha.raju.9/", "_blank");
  // }

  changeBank() {
    this.editBank = !this.editBank;
  }

  changeSentiment() {
    this.editSentiment = !this.editSentiment;
  }

  changeRecommendation() {
    this.editRecommendation = !this.editRecommendation;
  }

  changeCharacter() {
    this.editCharacter = !this.editCharacter;
  }

  changeFatality() {
    this.editFatality = !this.editFatality;
  }

  changeQQ() {
    this.editQQ = !this.editQQ;
  }

  changeLeafWilt() {
    this.leafWilt = !this.leafWilt;
  }

  isScreenLarge() {
    return this.screenService.isLarge();
  }
  showNav() {
    this.smallNav = !this.smallNav;
  }
}
