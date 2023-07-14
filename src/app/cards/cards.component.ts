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

  showDetails(character: any) {
    this.http.get('../../assets/data/database.json').subscribe((data: any) => {
      const characterDetails = data.characters.find((char: any) => char.id === character.id);
      if (characterDetails) {
        // Aquí puedes hacer lo que desees con los detalles del personaje, como mostrarlos en un modal o redirigir a una página de detalles
        console.log(characterDetails);
      }
    });
  }
}