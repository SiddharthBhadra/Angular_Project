import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-kdestination',
  templateUrl: './kdestination.component.html',
  styleUrls: ['./kdestination.component.css']
})
export class KdestinationComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
