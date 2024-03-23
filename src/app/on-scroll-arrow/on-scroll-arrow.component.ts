import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-scroll-arrow',
  templateUrl: './on-scroll-arrow.component.html',
  styleUrls: ['./on-scroll-arrow.component.scss']
})
export class OnScrollArrowComponent {
items: any;
	constructor() { }
	
	@Input() arrowId = 0;

	isHovered: boolean = false;

	toggleHover(value: boolean): void {
	  	this.isHovered = value;
	}
}