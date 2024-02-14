import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './left-card.component.html',
  styleUrl: './left-card.component.css'
})
export class LeftCardComponent {
  @Input()
  id:string = "0";
  @Input()
  cardTitle: string = "";
  @Input()
  cardSubtitle: string = "";
  @Input()
  cardPhoto: string = "";
}
