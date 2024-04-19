import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Portfolio';

	buttonText: string = 'Send message';
	textemail: string = '© Maximilian Stark 2024';
	items: any;
	
	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.checkViewportWidth();
	}
  
	checkViewportWidth() {
	  this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
	  this.textemail = window.innerWidth < 900 ? 'me@maximilian-stark.dev' : '© Maximilian Stark 2024';
	}
}
