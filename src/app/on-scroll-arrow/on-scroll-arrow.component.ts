import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-scroll-arrow',
  templateUrl: './on-scroll-arrow.component.html',
  styleUrls: ['./on-scroll-arrow.component.scss']
})
export class OnScrollArrowComponent implements OnInit {
	constructor() { }
	
	@Input() arrowId = 0;

	ngOnInit() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('show');
					}, 10000);
				}
			})
		});

		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => observer.observe(el));
	}
}