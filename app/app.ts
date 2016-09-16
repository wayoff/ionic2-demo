import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import {provideCloud, CloudSettings, Deploy} from '@ionic/cloud-angular';
import { StatusBar } from 'ionic-native';

import {UsersPage} from './pages/users/users';
import {ReposPage} from './pages/repos/repos';
import {OrganizationsPage} from './pages/organizations/organizations'

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4b0b0cb2'
  }
};

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UsersPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public deploy: Deploy) {
    this.initializeApp();
    this.deploy.getSnapshots().then((snapshots) => {
      // snapshots will be an array of snapshot uuids
    });
    // this should be on a provider for cleaner coding
    // won't do this until the demo, i might lost time
    this.deploy.check().then((snapshotAvailable: boolean) => {
      if(snapshotAvailable) {
        alert('New Update is available..');
        this.deploy.download().then(() => {
          this.deploy.extract().then( () => {
             this.deploy.load();
          });
        });
      }
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organizations', component: OrganizationsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [provideCloud(cloudSettings)]);
