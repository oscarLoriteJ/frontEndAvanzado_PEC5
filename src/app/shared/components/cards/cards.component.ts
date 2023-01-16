import { Component, Input, OnInit } from '@angular/core';
import { ItemType, Result } from 'src/app/models/NewsApiDto';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() item: Result = {
    section: '',
    subsection: '',
    title: '',
    abstract: '',
    url: '',
    uri: '',
    byline: '',
    item_type: ItemType.Article,
    updated_date: '',
    created_date: '',
    published_date: '',
    material_type_facet: '',
    kicker: '',
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: [],
    short_url: '',
  };

  @Input() switchView: boolean = true;

  constructor() {}

  ngOnInit(): void {}

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
