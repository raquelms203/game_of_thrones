import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  constructor(private service: CharacterService, private activatedRoute: ActivatedRoute) { }

  subs?: Subscription;
  character?: Character;
  id?: string = '';

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
    if (this.id) {
      this.subs = this.service.getCharactersById(this.id).subscribe({
        next: (value: any) => this.character = new Character(value.id, value.fullName, value.title, value.family, value.imageUrl),
        error: (_) => this.id = undefined
      }
      )
    }
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
