import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-tsilver',
  templateUrl: './tsilver.component.html',
  styleUrls: ['./tsilver.component.css']
})
export class TsilverComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
