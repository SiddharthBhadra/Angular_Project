import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/guard/auth.service';
@Component({
  selector: 'app-kplatinum',
  templateUrl: './kplatinum.component.html',
  styleUrls: ['./kplatinum.component.css']
})
export class KplatinumComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
