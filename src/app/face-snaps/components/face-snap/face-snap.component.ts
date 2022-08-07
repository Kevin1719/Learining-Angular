import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap  } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;     //pour y injecter les propriétés depuis le "app.component.ts"
  buttonSnap! : string;
  constructor(private faceSnapService: FaceSnapsService,
              private router: Router){}
  ngOnInit() {
    this.buttonSnap = "j'aime";
  }

  onSnap() {
    if(this.buttonSnap === "j'aime"){
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap')
      this.buttonSnap = "je n'aime plus";
    }
    else{
      this.faceSnapService.snapFaceById(this.faceSnap.id, 'unsnap')
      this.buttonSnap = "j'aime";
    }
  }
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
