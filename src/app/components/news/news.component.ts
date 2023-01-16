import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NewsApiDto } from 'src/app/models/NewsApiDto';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class NewsComponent implements OnInit {
  noticies: NewsApiDto = {
    status: '',
    copyright: '',
    section: '',
    last_updated: '',
    num_results: 0,
    results: [],
  };
  displayedColumns: string[] = ['title', 'byline', 'created_date', 'go_detail'];

  // false -> vista cards activa; true -> vista taula activa
  switchView: boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopNews().subscribe((news) => {
      this.noticies = news;
      console.log(news);
    });
  }

  /**
   * Mètode que rep un string del format uri
   * I retorna el hash Id.
   *
   * @param uri --> "nyt://article/898160b1-1827-55e1-9604-1505a2eda6b4"
   * @returns --> 898160b1-1827-55e1-9604-1505a2eda6b
   */
  extractId(uri: string): string {
    return uri.slice(14);
  }

  showCards() {
    this.switchView = true;
  }

  showTable() {
    this.switchView = false;
  }
}
