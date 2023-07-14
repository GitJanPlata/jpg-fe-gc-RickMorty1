import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/data/database.json').subscribe((data: any) => {
      const allCharacters = data.characters;
      for(let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * allCharacters.length);
        this.characters.push(allCharacters[index]);
        allCharacters.splice(index, 1);
      }
    });
  }

  showDetails(character: any) {
    this.http.get('../../assets/database.json').subscribe((data: any) => {
      const characterDetails = data.characters.find((char: any) => char.id === character.id);
      if (characterDetails) {
        // Aquí puedes hacer lo que desees con los detalles del personaje, como mostrarlos en un modal o redirigir a una página de detalles
        console.log(characterDetails);
      }
    });
  }
}