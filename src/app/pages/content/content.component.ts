import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { Data } from '../../data/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, MenuTitleComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  contentTitle : string = "";
  contentCover : string = "";
  contentFirstParagraph : string = "";
  contentSecondParagraph : string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const content = Data.find((content) => content.id === this.id);
      if (content) {
        this.contentTitle = content.title;
        this.contentCover = content.photo;
        this.contentFirstParagraph = content.firstParagraph;
        this.contentSecondParagraph = content.secondParagraph;
      }
    }
  }
}
