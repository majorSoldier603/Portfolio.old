import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    ngOnInit() {
        this.checkViewportWidth();
    }

	textemail: string = '© Maximilian Stark 2024';

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.checkViewportWidth();
	}
  
	checkViewportWidth() {
	  this.textemail = window.innerWidth < 900 ? 'me@maximilian-stark.dev' : '© Maximilian Stark 2024';
	}
}
