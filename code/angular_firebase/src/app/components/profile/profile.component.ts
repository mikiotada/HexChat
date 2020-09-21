import {Component, NgZone, OnInit} from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  channel = false;

    countChange(event) {
      this.channel = event;
    }
  constructor(
      public authService: AuthService,
      public router: Router,
      public ngZone: NgZone) {}

  ngOnInit(): void {
  }

}