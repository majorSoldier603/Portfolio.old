import { Component } from '@angular/core';

@Component({
  selector: 'app-app-arrow-scroll-right',
  templateUrl: './app-arrow-scroll-right.component.html',
  styleUrls: ['./app-arrow-scroll-right.component.scss']
})
export class AppArrowScrollRightComponent {
	constructor() { }

	ngOnInit() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			})
		});

		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => observer.observe(el));
	}
}
