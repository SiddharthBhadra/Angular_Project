import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-tgold',
  templateUrl: './tgold.component.html',
  styleUrls: ['./tgold.component.css']
})
export class TgoldComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
