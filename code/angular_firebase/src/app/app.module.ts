import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormGroup, FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';


// import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatChipsModule} from '@angular/material/chips';
import {MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

// routing
import { AppRoutingModule } from './shared/routing/app-routing.module';

import { AppComponent } from './app.component';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Google Analytics
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

// Auth service
import { AuthService } from './shared/services/auth.service';
import { FirebaseService } from './shared/services/firebase.service';

// Components that we created
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { ProfileComponent} from './components/profile/profile.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { RatingComponent } from './components/rating/rating.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatMsgsComponent } from './components/chat-msgs/chat-msgs.component';
import { ChatComponent } from './components/chat/chat.component';
import { FrontComponent } from './components/front/front.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewUserComponent } from './components/new-user/new-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewUserFacebookComponent } from './components/new-user-facebook/new-user-facebook.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ShowProfileComponent } from './components/showprofile/showprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferenceComponent,
    SignInComponent,
    SignUpComponent,
    RatingComponent,
    ChatListComponent,
    ProfileComponent,
    ChatMsgsComponent,
    ProfileComponent,
    ChatComponent,
    FrontComponent,
    NewUserComponent,
    EditUserComponent,
    NewUserFacebookComponent,
    ShowProfileComponent
  ],

    imports: [
        FlexLayoutModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule,
        MultiSelectAllModule,
        MatRadioModule,
        MatChipsModule,
        MatExpansionModule,
        CommonModule,
        AngularFireAnalyticsModule
    ],
  providers: [AuthService, FirebaseService,
  // {
  //     provide: MAT_CHIPS_DEFAULT_OPTIONS,
  //     useValue: {
  //       separatorKeyCodes: [ENTER, COMMA]
  //     }
  //   }
    ],

  bootstrap: [AppComponent]
})

export class AppModule { }
