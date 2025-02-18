import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-output',
  standalone: false,
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  constructor(public tipService: TipService, private router: Router) {}

  goBack() {
    this.router.navigate(['/input']);
  }
}
