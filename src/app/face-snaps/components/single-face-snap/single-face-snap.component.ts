import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  //faceSnap!: FaceSnap
  faceSnap$!: Observable<FaceSnap>;
  buttonSnap! : string;
  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute){}
  ngOnInit() {
    this.buttonSnap = "j'aime";
    const faceSnapId = +this.route.snapshot.params['id'];   //typeCast, soit + plus convertir un string en int
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)
  }

  onSnap(faceSnapId:number) {
   if(this.buttonSnap === "j'aime"){
      this.faceSnap$ = this.faceSnapService.snapFaceById(faceSnapId, 'snap').pipe(
        tap(()=> this.buttonSnap = "je n'aime plus")
      );
    }
    else{
      this.faceSnap$ = this.faceSnapService.snapFaceById(faceSnapId, 'unsnap').pipe(
        tap(()=> this.buttonSnap = "j'aime")
      );
    }
  }
}

