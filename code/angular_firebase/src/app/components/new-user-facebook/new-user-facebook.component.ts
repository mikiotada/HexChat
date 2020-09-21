import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {FirebaseService} from "../../shared/services/firebase.service";
//for image:
import {AngularFireStorage} from "@angular/fire/storage";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {finalize, map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from "@angular/material/chips";
import {Category1} from "../rating/rating.component";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import * as countries from '../../../assets/Countries.json';
import * as languages from '../../../assets/Languages.json';
import * as titles from '../../../assets/JobTitles.json';
import * as industries from '../../../assets/Industries.json';
import * as degrees from '../../../assets/Degrees.json';
import * as fieldsOfStudy from '../../../assets/FieldOfStudy.json';


@Component({
    selector: 'app-new-user-facebook',
    templateUrl: './new-user-facebook.component.html',
    styleUrls: ['./new-user-facebook.component.css']
})
export class NewUserFacebookComponent implements OnInit {

    exampleForm: FormGroup;
    userId;
    userProfile;

    //variables for image
    title = "cloudsSorage";
    selectedFile: File = null;
    fb_image;
    downloadURL: Observable<string>;
    userInfo;
    //-----

    validation_messages = {
        'name': [
            {type: 'required', message: 'Name is required.'}
        ],
        'userAppName': [
            {type: 'required', message: 'userAppName is required.'}
        ],
        'age': [
            {type: 'required', message: 'Age is required.'},
        ]
    };
    country = new FormControl();
    options: string[] = countries.countryList;
    countries: string[] = [];


    language = new FormControl();
    options_lang: string[] = languages.languageList;
    languages: string[] = [];

    interest = new FormControl();
    options_interests: string[] = ["singing", "dancing"];
    interests: string[] = [];

    jobTitle = new FormControl();
    options_jobs: string[] = titles.occupations;

    industry = new FormControl();
    options_industries: string[] = industries.industries;

    schoolName1 = new FormControl();
    options_schools1: string[] = ["GSB", "MIT"];

    degree1 = new FormControl();
    options_degrees1: string[] = degrees.degrees;

    fieldOfStudy1 = new FormControl();
    options_fieldOfStudy1: string[] = fieldsOfStudy.fields;

    schoolName2 = new FormControl();
    options_schools2: string[];


    degree2 = new FormControl();
    options_degrees2: string[] = degrees.degrees;

    fieldOfStudy2 = new FormControl();
    options_fieldOfStudy2: string[] = fieldsOfStudy.fields;


    // These are environment variables for chips/tags.
    visible = true;
    selectable = false;
    removable = true;
    addOnBlur = true;
    isUserInput = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    filteredOptions: Observable<string[]>;
    filteredOptions_lang: Observable<string[]>;
    filteredOptions_interests: Observable<string[]>;
    filteredOptions_jobs: Observable<string[]>;
    filteredOptions_industries: Observable<string[]>;
    filteredOptions_schools1: Observable<string[]>;
    filteredOptions_schools2: Observable<string[]>;
    filteredOptions_degrees1: Observable<string[]>;
    filteredOptions_degrees2: Observable<string[]>;
    filteredOptions_fields1: Observable<string[]>;
    filteredOptions_fields2: Observable<string[]>;
    // filteredOptions_industries: Observable<string[]>;

    gender: string[] = ['Male', 'Female', 'Other'];


    constructor(
        public firebaseService: FirebaseService,
        private fb: FormBuilder,
        private storage: AngularFireStorage,
        public authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit() {

        this.filteredOptions = this.country.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options))
            );
        this.filteredOptions_lang = this.language.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_lang))
            );
        this.filteredOptions_interests = this.interest.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_interests))
            );
        this.filteredOptions_jobs = this.jobTitle.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_jobs))
            );
        this.filteredOptions_industries = this.industry.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_industries))
            );
        this.filteredOptions_schools1 = this.schoolName1.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_schools1))
            );
        this.filteredOptions_schools2 = this.schoolName2.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_schools2))
            );
        this.filteredOptions_degrees1 = this.degree1.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_degrees1))
            );
        this.filteredOptions_degrees2 = this.degree2.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_degrees2))
            );
        this.filteredOptions_fields1 = this.fieldOfStudy1.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_fieldOfStudy1))
            );
        this.filteredOptions_fields2 = this.fieldOfStudy2.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.options_fieldOfStudy2))
            );


        this.authService.user$.subscribe(user => {
            if (user) {
                this.userId = user.uid;
                this.userProfile = user.profile;

                this.fb_image = this.userProfile.profileImageUrl;
                this.createForm();
            }
        });


    }

    createForm() {
        this.exampleForm = this.fb.group({
            // name: [this.userProfile.name, Validators.required],
            userAppName: ['', Validators.required],
            age: ['', Validators.required],
            country: [''],
            gender: ['', [Validators.required]],
            language: [''],
            jobTitle: [''],
            industry: [''],
            interest: ['']

        });
    }

    add(event: MatChipInputEvent, thing): void {
        const input = event.input;
        const value = event.value;
        // Add a tag
        if ((value || '').trim()) {
            thing.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }


    remove(exp: Category1, thing): void {
        const index = thing.indexOf(exp);

        if (index >= 0) {
            thing.splice(index, 1);
        }
    }

    addCountry() {
        this.countries.push(this.country.value);
        this.country.setValue("")
    }

    addLanguage() {
        this.languages.push(this.language.value);
        this.language.setValue("")
    }

    addInterest() {
        this.interests.push(this.interest.value);
        this.interest.setValue("")
    }

    resetFields() {
        // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.exampleForm = this.fb.group({
            // name: new FormControl('', Validators.required),
            userAppName: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required),
        });
    }


    removeEmptyStrings(variable)
        {
          var filteredArray=  variable.filter(function (el) {
                return el != "";
            });
          return filteredArray;
        }


    onSubmit(value) {

        this.countries.push(this.country.value);
        this.languages.push(this.language.value);
        this.interests.push(this.interest.value);

        value.countries = this.removeEmptyStrings(this.countries);
        value.languages = this.removeEmptyStrings(this.languages);
        value.interests = this.removeEmptyStrings(this.interests);
        value.jobTitle = this.jobTitle.value;
        value.industry = this.industry.value;

        value.school1Info = {schoolName:this.schoolName1.value, degree:this.degree1.value,fieldOfStudy: this.fieldOfStudy1.value }
        value.school2Info = {schoolName:this.schoolName2.value, degree:this.degree2.value,fieldOfStudy: this.fieldOfStudy2.value }

        this.firebaseService.createUserFacebook(value, this.userProfile.name, this.userProfile.profileImageUrl, this.userId)
            .then(
                res => {
                    this.router.navigate(['user']);
                    // this.resetFields();
                }
            )
    }


    onFileSelected(event) {
        var n = Date.now();
        const file = event.target.files[0];
        const filePath = `ProfileImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`ProfileImages/${n}`, file);
        task
            .snapshotChanges()
            .pipe(
                finalize(() => {
                    this.downloadURL = fileRef.getDownloadURL();
                    this.downloadURL.subscribe(url => {
                        if (url) {
                            this.fb_image = url;
                            this.userProfile.profileImageUrl = url;
                        }
                        console.log(this.fb_image);

                    });
                })
            )
            .subscribe(url => {
                if (url) {
                    console.log(url);
                }
            });
    }

    private _filter(value: string, options): string[] {
        const filterValue = value.toLowerCase();
        if(options) {
            return options.filter(option => option.toLowerCase().includes(filterValue));
        }

    }


}
