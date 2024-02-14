import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-right-card-news',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './right-card-news.component.html',
  styleUrl: './right-card-news.component.css'
})
export class RightCardNewsComponent {
  @Input()
  id:string = "0";
  @Input()
  newsPhoto: string = "";
  @Input()
  newsTitle: string = "";
  @Input()
  newsDate: string = "";
}
