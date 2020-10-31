import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-tpackage',
  templateUrl: './tpackage.component.html',
  styleUrls: ['./tpackage.component.css']
})
export class TpackageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
