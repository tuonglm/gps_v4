import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 uniqueDeviceIdStr : any;

  constructor(public navCtrl: NavController, private uniqueDeviceID: UniqueDeviceID, public sanitizer: DomSanitizer) {
  	this.getDeviceUniqueId();
  }



	getDeviceUniqueId() {
	    this.uniqueDeviceID.get()
	        .then((uuid: string) => this.uniqueDeviceIdStr = uuid)
	        .catch((error: any) => {
	            this.uniqueDeviceIdStr = "N/A";
	    });
	}

	tarisGpsURL() {
    	return 'http://ios.taris.vn/apptest?abc=' + this.uniqueDeviceIdStr;
  	}
}
