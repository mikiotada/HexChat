import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../shared/services/firebase.service';
import {AuthService} from '../../shared/services/auth.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {first} from "rxjs/operators";

export interface Category1 {
  name: string;
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  showSuccessMsg = false;
  userId;
  // These are environment variables for chips/tags.
  visible = true;
  selectable = false;
  removable = true;
  addOnBlur = true;
  isUserInput = true;
  // userTags = this.firebaseService.getUserTags(this.userId);
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags1;
  tags2;
  tags3;
  drawer1: Category1[] = [];
  drawer2: Category1[] = [];
  drawer3: Category1[] = [];
  private tags;
  chipControl = {tags1: new Set(), tags2: new Set(), tags3: new Set()};
  submitted = this.alreadySub();


  constructor(public firebaseService: FirebaseService,
              public authService: AuthService,
              private fb: FormBuilder) {}

  async ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
    this.tags = await this.firebaseService.getTest();
    this.tags1 = await this.firebaseService.getTest().then(aws => aws.tags1);
    this.tags2 = await this.firebaseService.getTest().then(aws => aws.tags2);
    this.tags3 = await this.firebaseService.getTest().then(aws => aws.tags3);

    for (const item of this.tags1) {
    this.drawer1.push({name: item.toString()});
    }

    for (const item of this.tags2) {
    this.drawer2.push({name: item.toString()});
    }

    for (const item of this.tags3) {
    this.drawer3.push({name: item.toString()});
    }


  }

  async alreadySub() {
        const pref = await this.authService.user$.pipe(first()).toPromise()
            .then(ams => ams.preference);
        console.log("hi", Object.keys(pref).length);

    }


  onSubmit(sth, tags) {
        // value.avatar = this.item.avatar;
        console.log('vali', [...tags]);
        this.firebaseService.updatePreference(this.userId, sth, [...tags]);
    }

  toggleChip = (chip: any, tagField) => {
    const addChip = () => { this.chipControl[tagField].add(chip); };
    const removeChip = () => { this.chipControl[tagField].delete(chip); };

    this.chipControl[tagField].has(chip) ? removeChip() : addChip();
  }


  // chips(tagField: string) {
  //   const field = this.chipControl;
  //   return field.tagField.value;
  //    }

  //   add(event: MatChipInputEvent, thing): void {
  //   const input = event.input;
  //   const value = event.value;
  //   // Add a tag
  //   if ((value || '').trim()) {
  //     thing.push({name: value.trim()});
  //   }
  //
  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  //
  //
  // remove(exp: Category1, thing): void {
  //   const index = thing.indexOf(exp);
  //
  //   if (index >= 0) {
  //     thing.splice(index, 1);
  //   }
  // }




}
