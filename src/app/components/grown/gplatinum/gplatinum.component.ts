import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gplatinum',
  templateUrl: './gplatinum.component.html',
  styleUrls: ['./gplatinum.component.css']
})
export class GplatinumComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
