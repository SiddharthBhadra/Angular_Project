import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-ggold',
  templateUrl: './ggold.component.html',
  styleUrls: ['./ggold.component.css']
})
export class GgoldComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
