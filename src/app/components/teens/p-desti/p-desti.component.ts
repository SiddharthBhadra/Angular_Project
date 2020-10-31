import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/guard/auth.service';

@Component({
  selector: 'app-p-desti',
  templateUrl: './p-desti.component.html',
  styleUrls: ['./p-desti.component.css']
})
export class PDestiComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
