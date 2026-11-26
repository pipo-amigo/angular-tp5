import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Session } from '../../services/session';

@Component({
  selector: 'app-mes-inscriptions',
  imports: [RouterLink],
  templateUrl: './mes-inscriptions.html',
})
export class MesInscriptions {
  session = inject(Session);
}
