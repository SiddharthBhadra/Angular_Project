import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gpackage',
  templateUrl: './gpackage.component.html',
  styleUrls: ['./gpackage.component.css']
})
export class GpackageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
