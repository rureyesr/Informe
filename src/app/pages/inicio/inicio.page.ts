import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {format} from 'date-fns'
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  inputValue: number[] = [0, 0, 0, 0, 0]; 
  inputValueM: number = 0;

  

  isIOS: boolean;
  isAndroid: boolean;
  formattedDate: string;

  

  constructor(private platform: Platform) {
    this.isIOS = this.platform.is('ios');
    this.isAndroid = this.platform.is('android');

    const today = new Date();
    this.formattedDate = format(today, 'dd') + ' de '+ format(today, 'MMMM', { locale: es}); 
    console.log(this.formattedDate)
  }

  incrementValue(index: number) {
    this.inputValue[index]++;
  }

  decrementValue(index: number) {
    if (this.inputValue[index] > 0) {
      this.inputValue[index]--;
    }
  }

  incrementValueM() {
    this.inputValueM = this.inputValueM + 5;
  }

  decrementValueM() {
    if (this.inputValueM > 0) {
      this.inputValueM = this.inputValueM-5;
    }
  }

  ngOnInit() {
  }

}


