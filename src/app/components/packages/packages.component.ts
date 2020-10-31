import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/guard/auth.service';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
  }

}
