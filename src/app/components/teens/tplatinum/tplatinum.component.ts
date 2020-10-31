import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-tplatinum',
  templateUrl: './tplatinum.component.html',
  styleUrls: ['./tplatinum.component.css']
})
export class TplatinumComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
