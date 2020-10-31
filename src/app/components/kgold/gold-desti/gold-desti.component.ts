import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gold-desti',
  templateUrl: './gold-desti.component.html',
  styleUrls: ['./gold-desti.component.css']
})
export class GoldDestiComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
