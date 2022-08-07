import {Component, OnInit} from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  //faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>
  //private destroy$! :  Subject<boolean>

  constructor(private faceSnpasService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnpasService.getAllFaceSnaps()
    //this.destroy$ = new Subject<boolean>()
    //this.faceSnaps = this.faceSnpasService.getAllFaceSnaps();
    /*interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)).subscribe();*/
  }

  /*ngOnDestroy() {
    this.destroy$.next(true)
  }*/

}
//next: pour faire émettre le subject
