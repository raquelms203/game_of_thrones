import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
    constructor(private service: CharacterService) { }

    subs?: Subscription;
    characters:Array<Character> = [];

    ngOnInit() {
      this.subs = this.service.getCharacters().subscribe({
        next: (value: any) =>  this.characters = value.map((item: any) => new Character(
          item.id,
          item.fullName,
          item.title,
          item.family,
          item.imageUrl
        )),
        error: (err) => console.log(err)
      })
    }

    ngOnDestroy() {
      this.subs?.unsubscribe();
    }
}
