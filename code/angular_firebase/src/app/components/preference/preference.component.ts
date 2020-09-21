import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})

export class PreferenceComponent implements OnInit {

   profileBtnClick = function() {
        this.router.navigate(['edit-user'], {relativeTo: this.route});
};


  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
