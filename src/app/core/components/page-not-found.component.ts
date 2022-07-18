import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',

  /* Realizando a criação da página de erro diretamente no TS */
//HTML
  template: `
  <mat-card>
    <mat-card-title>404: page Not Found </mat-card-title>

    <mat-card-content>  We couldn't find that page! Not even with x-ray vision </mat-card-content>

    <mat-card-actions>
      <button mat-raised-button color="primary" routerLink="/">
      Take Me Home
      </button>
    </mat-card-actions>
  </mat-card>
  `,

//CSS
styles: [
  `
    :host {
      text-align: center;
    }

  `,
],



})
export class PageNotFoundComponent  {
}
