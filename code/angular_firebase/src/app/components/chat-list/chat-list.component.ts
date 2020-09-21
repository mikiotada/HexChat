import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

import { ChatService } from '../../shared/services/chat.service';



@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  userChats$;

  chatList = [
    {
    group_name: 'USF MSDS Students',
    time: '9:30 AM',
    last_msg: 'meeting at 10',
    img_url: 'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg'
    },
    {
    group_name: 'fast.ai Cohort 4',
    time: 'yesterday',
    last_msg: 'nice to meet you all',
    img_url: 'https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-travel-destination-san-francisco-main-page.imgcache.rev2e8bf9592b441099e8e7efb70e1c1e4b.web.650.370.jpg'
    },
    {
    group_name: 'Python developers',
    time: '04/03/2020',
    last_msg: 'great work!',
    img_url: 'https://image.shutterstock.com/image-photo/positive-skilled-young-multiethnic-coders-260nw-1145542748.jpg'
    }
  ];
//       id = userChats.
     showChat = function (id) {
        console.log(id)
        this.router.navigate(['chats/', id], {relativeTo: this.route});
      };


  constructor(
      private route: ActivatedRoute,
      public authService: AuthService,
      public router: Router,
      public cs: ChatService
  ) {}

  ngOnInit(): void {
    this.userChats$ = this.cs.getUserChats();
  }

}
