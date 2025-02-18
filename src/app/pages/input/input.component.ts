import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  cost: number = 0;
  quality: number = 0;
  roundUp: boolean = false;

  constructor(private tipService: TipService, private router: Router) {}

  onSubmit() {
    if (this.cost > 0 && this.quality) {
      this.tipService.cost = this.cost;
      this.tipService.quality = this.quality;
      this.tipService.roundUp = this.roundUp;
      this.tipService.calculateTip();
      this.router.navigate(['/output']);
    }
  }
}
