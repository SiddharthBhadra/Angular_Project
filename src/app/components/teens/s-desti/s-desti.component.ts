import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-s-desti',
  templateUrl: './s-desti.component.html',
  styleUrls: ['./s-desti.component.css']
})
export class SDestiComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
