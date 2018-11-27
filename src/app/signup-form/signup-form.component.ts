import { Component, OnInit } from '@angular/core';
import countries from '../countries.json';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
	cntries = countries

  constructor() { }

  ngOnInit() {
  }




}
