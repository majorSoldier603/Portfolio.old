import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';
import { OnScrollArrowComponent } from './on-scroll-arrow/on-scroll-arrow.component';

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

	items = Array(1).fill(0);

	ngAfterViewInit() {
		this.scrollArrows.forEach((scrollArrow, index) => {
			scrollArrow.nativeElement.children[0].id = 'arrow' + index;
		});
	}

	@HostListener('window:resize', ['$event'])

	onResize(event: any) {
		this.checkViewportWidth();
	}

	checkViewportWidth() {
		this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
		this.textemail = window.innerWidth < 900 ? 'me@maximilian-stark.dev' : '© Maximilian Stark 2024';
	}
}
