import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  userChats$;
  constructor(
    public authService: AuthService,
    public cs: ChatService
  ) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}