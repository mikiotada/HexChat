import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar'

// import {MatOptionModule} from '@angular/material/option';

const material = [
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatListModule,
  MatSnackBarModule,
  // MatOptionModule,
  MatProgressSpinnerModule];

@NgModule({
  exports: [material],
  imports: [CommonModule,
      material
  ]
})
export class MaterialModule { }
