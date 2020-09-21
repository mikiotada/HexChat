import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from '../../components/home/home.component';
import { PreferenceComponent} from '../../components/preference/preference.component';
import { SignInComponent } from '../../components/signin/signin.component';
import { SignUpComponent } from '../../components/signup/signup.component';

import { RatingComponent } from '../../components/rating/rating.component';
import { ChatMsgsComponent } from '../../components/chat-msgs/chat-msgs.component';
import { ProfileComponent } from '../../components/profile/profile.component';

import { ChatComponent } from '../../components/chat/chat.component';
import { ShowProfileComponent } from '../../components/showprofile/showprofile.component';
import { FrontComponent } from '../../components/front/front.component';

import { NewUserComponent } from '../../components/new-user/new-user.component';
import { NewUserFacebookComponent } from '../../components/new-user-facebook/new-user-facebook.component';
import { EditUserComponent } from '../../components/edit-user/edit-user.component';

// Import canActivate guard services
import { AuthGuard } from '../../shared/guard/auth.guard';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'join', component: SignUpComponent, canActivate: []},
  { path: 'signin', component: SignInComponent, canActivate: []},
  // { path: 'new-user', component: NewUserComponent, canActivate: [AuthGuard]},
  { path: 'new-user', component: NewUserFacebookComponent, canActivate: [AuthGuard]},
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},

  { path: 'front', component: FrontComponent},
  // { path: 'chats/:id', component: ChatComponent, canActivate: [AuthGuard]},

  { path: 'user',
    component: PreferenceComponent,
    canActivate: [AuthGuard],
    children:[
      { path: '', component: RatingComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'edit-user', component: EditUserComponent},
      { path: 'chats/:id', component: ChatComponent,
        children:[
            { path: 'user-profile/:id',
              component: ShowProfileComponent,
            }
        ]
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
