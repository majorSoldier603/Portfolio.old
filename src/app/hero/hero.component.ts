import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
	ngOnInit(): void {
		this.fadeInOut(true)
	}
	fadeInOut(isFadeOut:boolean) {
		const element = document.querySelector('.fade-in-out');
		if (element) {
			if (isFadeOut) {
				element.classList.add('fade-out');
			} else {
				element.classList.remove('fade-out');
			}
		}
	}

	bgColor: string = 'FFFCF3';
	textColor: string = 'black';

	changeBntColor(isBlack:boolean) {
		console.log(isBlack, this.textColor)
		if (isBlack) {
			this.bgColor = 'black';
			this.textColor = 'white';

		} else {
			this.bgColor = '#FFFCF3';
			this.textColor = 'black';
		}
	}

	scrollToContact() {
		const element = document.getElementById("myForm");
		if (element) {
			console.log('element: ', element);
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		}
	}
}
