import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowProfileComponent implements OnInit {
  users$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    public cs: ChatService,
   ) { }

  ngOnInit() {
    const userID = this.route.snapshot.paramMap.get('id');
    console.log("userid on paramMap" ,userID)
    this.users$ = this.cs.userID2usermail_(userID);
  }

}
