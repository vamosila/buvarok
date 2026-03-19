/*
* File: diverfilter-pipe.ts
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: SZOFT II-N
* Date: 2026-03-19
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diverfilter'
})
export class DiverfilterPipe implements PipeTransform {

  transform(divers: any[], filter: string | null): any {
    if (!divers || !filter) {
      return divers;
    }
    return divers.filter(
      diver => diver.nev.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
