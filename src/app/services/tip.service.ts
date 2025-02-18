import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  cost: number = 0;
  quality: number = 0;
  roundUp: boolean = false;
  tipAmount: number = 0;
  totalBill: number = 0;

  calculateTip() {
    this.tipAmount = this.cost * this.quality;
    if (this.roundUp) {
      this.tipAmount = Math.ceil(this.tipAmount);
    } else {
      this.tipAmount = Math.round(this.tipAmount * 100) / 100;
    }
    this.totalBill = this.cost + this.tipAmount;
  }
}
