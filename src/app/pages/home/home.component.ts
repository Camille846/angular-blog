import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { LeftCardComponent } from '../../components/left-card/left-card.component';
import { RightCardComponent } from '../../components/right-card/right-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent, LeftCardComponent, RightCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
