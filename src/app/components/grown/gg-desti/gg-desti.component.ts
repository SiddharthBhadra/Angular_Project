import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-gg-desti',
  templateUrl: './gg-desti.component.html',
  styleUrls: ['./gg-desti.component.css']
})
export class GgDestiComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
