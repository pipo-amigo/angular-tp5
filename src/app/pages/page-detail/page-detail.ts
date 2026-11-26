import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cours } from '../../models/cours';
import { COURS } from '../../data/cours';
import { DetailCours } from '../../composants/detail-cours/detail-cours';

@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
})
export class PageDetail {
  // Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
  @Input() id = '';

  get cours(): Cours | undefined {
    return COURS.find((c) => c.id === Number(this.id));
  }
}
