import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
	title = 'Portfolio';

	buttonText: string = 'Send message';
	textemail: string = '© Maximilian Stark 2024';

	constructor() {
		this.scrollArrows = new QueryList<ElementRef>();
	}

	@ViewChildren('scrollArrow', { read: ElementRef }) scrollArrows: QueryList<ElementRef>;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.checkViewportWidth();
	}

	items = Array(1).fill(0);

	ngAfterViewInit() {
		this.scrollArrows.forEach((scrollArrow, index) => {
			scrollArrow.nativeElement.id = 'arrow' + index;
		});
	}

	checkViewportWidth() {
		this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
		this.textemail = window.innerWidth < 900 ? 'me@maximilian-stark.dev' : '© Maximilian Stark 2024';
	}
}
