import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-g-desti',
  templateUrl: './g-desti.component.html',
  styleUrls: ['./g-desti.component.css']
})
export class GDestiComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
