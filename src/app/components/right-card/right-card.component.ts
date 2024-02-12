import { Component } from '@angular/core';
import { RightCardNewsComponent } from './right-card-news/right-card-news.component';

@Component({
  selector: 'app-right-card',
  standalone: true,
  imports: [RightCardNewsComponent],
  templateUrl: './right-card.component.html',
  styleUrl: './right-card.component.css'
})
export class RightCardComponent {

}
