import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    // Inject AuthService class here so that these services will be available throughout the same template
    public authService: AuthService
    ) { }

  ngOnInit() { }

}

import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
