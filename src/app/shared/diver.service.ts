/*
* File: diver.service.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-19
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiverService {
  buvarok = [
    {
        id: 1,
        nev: "Berta Evelin",
        kor: 28,
        neme: "nő",
        magassag: 170
    },
    {
        id: 2,
        nev: "Tingó Lajos",
        kor: 32,
        neme: "férfi",
        magassag: 183
    },
    {
        id: 3,
        nev: "Csaló Ferenc",
        kor: 28,
        neme: "férfi",
        magassag: 178
    },
    {
        id: 4,
        nev: "Csadi Borbála",
        kor: 31,
        neme: "nő",
        magassag: 168
    }
  ];

  getDivers() {
    const data$: Observable<any[]> = of(this.buvarok);
    return data$;
  }
}
