import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location // FOR ME: Make sure that correct one is imported.
                               // For me, when typing "Location", I found one with
                               // interface, and one another with class. I have to
                               // choose the class related import.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
