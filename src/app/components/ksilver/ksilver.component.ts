import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/guard/auth.service';

@Component({
  selector: 'app-ksilver',
  templateUrl: './ksilver.component.html',
  styleUrls: ['./ksilver.component.css']
})
export class KsilverComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
