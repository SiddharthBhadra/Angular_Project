import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gs-desti',
  templateUrl: './gs-desti.component.html',
  styleUrls: ['./gs-desti.component.css']
})
export class GsDestiComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
