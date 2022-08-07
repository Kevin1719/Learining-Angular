import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor( private router: Router) { }
  userEmail!: string;
  ngOnInit(): void {
    this.userEmail = 'kevin.randrianasolo@esti.mg'
  }
  onContinue() {
    this.router.navigateByUrl('facesnaps').then(r => console.log("Nice"));
  }
  OnSubmit(form: NgForm){
    console.log(form.value)
    this.router.navigateByUrl('spinner')
  }
}
