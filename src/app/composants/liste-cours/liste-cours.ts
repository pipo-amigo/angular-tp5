import { Component, EventEmitter, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cours } from '../../models/cours';
import { COURS } from '../../data/cours';
import { FiltreCoursPipe } from '../../pipes/filtre-cours';
import { TriCoursPipe } from '../../pipes/tri-cours';

@Component({
  imports: [FormsModule, RouterLink, UpperCasePipe, FiltreCoursPipe, TriCoursPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  @Output() coursSelectionne = new EventEmitter<Cours>();

  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

  coursActif: Cours | null = null;
  cours: Cours[] = COURS;

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}
