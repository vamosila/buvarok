/*
* File: diver.component.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-19
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Component, inject } from '@angular/core';
import { DiverService } from '../shared/diver.service';
import { DiverfilterPipe } from '../shared/pipe/diverfilter-pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-diver',
  imports: [DiverfilterPipe, ReactiveFormsModule],
  templateUrl: './diver.component.html',
  styleUrl: './diver.component.css',
})
export class DiverComponent {
  diverService = inject(DiverService);
  diverList: any;
  actName = '';
  nameFilter = new FormControl('');

  ngOnInit() {
    this.getDivers();
  }

  getDivers() {
    this.diverService.getDivers().subscribe({
      next: (result) => {
        console.log(result);
        this.diverList = result;
      },
      error: () => {}
    })
  }
}
