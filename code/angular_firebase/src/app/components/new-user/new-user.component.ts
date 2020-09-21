import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../shared/services/firebase.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../shared/services/auth.service";
import {finalize, map, startWith} from 'rxjs/operators';
import * as countries from '../../../assets/Countries.json';
//for image:
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

// import {Observable} from "rxjs";

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

    exampleForm: FormGroup;
    validation_messages = {
        'name': [
            {type: 'required', message: 'Name is required.'}
        ],

        'age': [
            {type: 'required', message: 'Age is required.'},
        ]
    };

    //variables for image
    title = "cloudsSorage";
    selectedFile: File = null;
    fb_image;
    downloadURL: Observable<string>;
    userInfo;
    //-----

    country = new FormControl();
    options: string[] = countries.countryList;
    filteredOptions: Observable<string[]>;
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
                map(value => this._filter(value))
            );

        this.createForm();
        this.authService.user$.subscribe(user => this.userInfo = user);
        // this.user=getValue(this.authService.user$)
        console.log(this.userInfo)
    }

    createForm() {
        this.exampleForm = this.fb.group({
            name: ['', Validators.required],
            age: ['', Validators.required],
            imageurl: [''],
            country: [''],
            gender: ['', [Validators.required]],
        });
    }

    resetFields() {
        // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.exampleForm = this.fb.group({
            name: new FormControl('', Validators.required),
            // surname: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required),
        });
    }

    onSubmit(value) {
        value.country = this.country.value;
        this.firebaseService.createUser(value, this.fb_image, this.userInfo.uid)
            .then(
                res => {
                    this.router.navigate(['preference']);
                    this.resetFields();

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

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }


}
