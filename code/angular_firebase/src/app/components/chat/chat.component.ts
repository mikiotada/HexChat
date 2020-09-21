import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private chatContainer: ElementRef;
  chat$: Observable<any>;
  newMsg: string;
  users$: Observable<any>;

  showUser = function (id) {
        console.log("user id on showUser", id)
        this.router.navigate(['user-profile/', id], {relativeTo: this.route});
  };

  constructor(
    public cs: ChatService,
    private route: ActivatedRoute,
    public router: Router,
    public authService: AuthService,
    private afs: AngularFirestore,
  ) { }
//
//   test() {
//     const docRef = this.afs.collection("chats").doc("2jC0rOg3gH4U4UKvb5ni")
//   }

  ngOnInit() {
    const chatId = this.route.snapshot.paramMap.get('id');
    const source = this.cs.get(chatId);
    this.chat$ = this.cs.joinUsers(source);
    this.scrollBottom();
  }


  scrollToBottom(): void {
    this.chatContainer.nativeElement.scrollTop
    = this.chatContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }


  submit(chatId) {
    if (!this.newMsg) {
      return alert('you need to enter something');
    }
    this.cs.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
    this.scrollBottom();
  }

  trackByCreated(i, msg){
    return msg.createdAt;
  }

  private scrollBottom() {
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }

}
