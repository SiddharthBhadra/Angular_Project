import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gsilver',
  templateUrl: './gsilver.component.html',
  styleUrls: ['./gsilver.component.css']
})
export class GsilverComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
