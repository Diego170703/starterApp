import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  emailAddress = "john.doe@mail.com";
  name = "Erwin";
  surname = "Palma"

  constructor(
    private authService: AuthenticationService, private router: Router
  ) { }

  ngOnInit() {
  }

  // Sign out
  async signOut() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }


}
