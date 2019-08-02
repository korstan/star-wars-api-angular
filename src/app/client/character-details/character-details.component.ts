import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, share } from 'rxjs/operators';
import { Character } from 'src/app/core/models/character';
import { PeopleService } from 'src/app/core/services/people/people.service';

/**
 * Character details page
 */
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  /**
   * Character detailed on a page
   */
  public character$: Observable<Character>;
  /**
   * Details headers to show on page
   */
  public details$: Observable<string[]>;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) {
    this.character$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.peopleService.fetchCharacterById(parseInt(params.get('id'), 10)),
      ),
      mergeMap(character => character),
      share(),
    );

    this.details$ = this.character$.pipe(
      map((data: Character) => this.mapDetailsToArray(data)),
    );
  }
  /**
   * Fills details property with film details
   * @param character Film model to map into details string[]
   */
  public mapDetailsToArray(character: Character): string[] {
    const result: string[] = [];
    result.push(`Birth year: ${character.birthYear}`);
    result.push(`Eye color: ${character.eyeColor}`);
    result.push(`Gender: ${character.gender}`);
    result.push(`Hair color: ${character.hairColor}`);
    result.push(`Height: ${character.height}`);
    result.push(`Homeworld: ${character.homeworld}`);
    result.push(`Mass: ${character.mass}`);
    result.push(`Name: ${character.name}`);
    result.push(`Skin color: ${character.skinColor}`);
    return result;
  }
}
