import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {User} from '../../models/user';
import {UserDetailsPage} from '../user-details/user-details';

import {GithubUsers} from '../../providers/github-users/github-users';
@Component({
  templateUrl: 'build/pages/users/users.html',

  providers: [GithubUsers]
})
export class UsersPage {
  users: User[];

  constructor(private navCtrl: NavController, private githubUsers : GithubUsers) {
      this.githubUsers
        .load()
        .then(users => this.users = users);
  }

  goToDetails(event, login) {
    this.navCtrl.push(UserDetailsPage, {
      login: login
    });
  }

  search(searchTerm) {
    let term = searchTerm.target.value;

    if (term.trim() == '' || term.trim().length < 3) {
      this.githubUsers
        .load()
        .then(users => this.users = users)
    } else {
      this.githubUsers.searchUsers(term)
        .then(users => this.users = users)
    }
  }

}
