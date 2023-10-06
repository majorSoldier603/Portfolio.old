import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
	body = document.querySelector('body');
	targetElement = document.getElementById('mainbody');

	toggelScroll() {
		if (this.targetElement) {
			this.targetElement.classList.toggle('stop-scrolling');
		}
	}
}