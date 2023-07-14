import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/data/database.json').subscribe((data: any) => {
      this.characters = data.characters;
    });
  }
}