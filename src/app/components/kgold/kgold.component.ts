import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/guard/auth.service';
@Component({
  selector: 'app-kgold',
  templateUrl: './kgold.component.html',
  styleUrls: ['./kgold.component.css']
})
export class KgoldComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
