import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gp-desti',
  templateUrl: './gp-desti.component.html',
  styleUrls: ['./gp-desti.component.css']
})
export class GpDestiComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
