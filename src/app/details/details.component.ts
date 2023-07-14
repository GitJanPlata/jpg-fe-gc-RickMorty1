import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const characterId = this.route.snapshot.paramMap.get('id');
    this.http.get('../../assets/data/database.json').subscribe((data: any) => {
    this.character = data.characters.find((char: any) => char.id === +characterId!);
    });
  }
}