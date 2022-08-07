import { Component, OnInit} from '@angular/core';
import { FaceSnap  } from './core/models/face-snap.model';
import {filter, interval, map, Observable, tap} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  constructor(){}
  interval$! : Observable<string>
  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  ngOnInit() {
    this.faceSnaps = []
    /*this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ?
        `Je suis ${value} et je suis pair`:
        `Je suis ${value} et je suis impair`),
      tap(text => this.logger(text))
    )*/
  }
}
//l'opérateur "map" permet de transformer les émissiond d'un Observable
//l'opérateur "filter" permet de filtrer les émissions
//l'opérateur "tap" permet d'ajouter des effets secondaires à un Observable
