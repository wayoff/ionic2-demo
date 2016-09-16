import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import GithubUsers Provider
import {GithubUsers} from '../../providers/github-users/github-users';

// Import the User model
import {User} from '../../models/user';

/*
  Generated class for the UserDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
  providers: [GithubUsers]
})
export class UserDetailsPage {
  login: string;
  user: User;

  constructor(private navCtrl: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');

    githubUsers.loadDetails(this.login)
      .then( user => {
        this.user = user;
        console.log(this.user);
      });

    githubUsers
      .searchUsers('ganga')
      .then(users => console.log(users));
  }

}
