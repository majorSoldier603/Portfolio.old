import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-arrow-scroll',
	templateUrl: './arrow-scroll.component.html',
	styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			})
		});

		const hiddenElements = document.querySelectorAll('.hidden');
		hiddenElements.forEach((el) => observer.observe(el));
	}
}
