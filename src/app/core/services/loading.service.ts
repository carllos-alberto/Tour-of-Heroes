import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

private loadingSubject = new BehaviorSubject<boolean>(false);

loading$: Observable<boolean> = this.loadingSubject.asObservable();

hide(): void {
  this.loadingSubject.next(false);
}

show(): void {
  this.loadingSubject.next(true);
}


}




/* IMPORTANTE
* sempre que se cria um atributo do tipo observable eu coloco na frente o $  "loading$" para identifica-la.
*/
