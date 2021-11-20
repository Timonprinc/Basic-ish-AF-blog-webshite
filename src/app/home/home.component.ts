import { Component, OnInit } from '@angular/core';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    const URL=""
    window.location.assign(URL)
  }

}
