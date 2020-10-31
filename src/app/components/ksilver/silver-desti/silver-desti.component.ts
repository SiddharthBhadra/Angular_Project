import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-silver-desti',
  templateUrl: './silver-desti.component.html',
  styleUrls: ['./silver-desti.component.css']
})
export class SilverDestiComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
