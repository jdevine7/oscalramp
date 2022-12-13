import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-navbar',
  // standalone: true,
	// imports: [NgbCollapseModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  faBars = faBars;
	isMenuCollapsed = true
  
  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async notifyMe() {
    await LocalNotifications.schedule({
      notifications: [ 
        {
          title: 'this is a notification',
          body: 'bada bing',
          id: 1
        }
      ]
    })
  }
}
