import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewApiDto } from 'src/app/models/NewApiDto';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  noticia?: NewApiDto;
  panelOpenState = false;
  moreInfoBtn = false;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id') || ' ';
    console.log('Identfier -->', identifier);

    this.newsService.getNewById(identifier).subscribe((not) => {
      if (!not) {
        return this.router.navigateByUrl('/');
      }
      this.noticia = not;

      console.log('New -->', this.noticia);
    });
  }

  changeView() {
    this.moreInfoBtn = this.moreInfoBtn == true ? false : true;
  }
}
