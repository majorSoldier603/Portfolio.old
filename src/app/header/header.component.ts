import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	isChecked:boolean = false

	onCheckboxChange() {
		console.log(this.isChecked)
		if (this.isChecked) {
			document.getElementById('header-sec')?.classList.remove('d-none')
			document.getElementById('mainbody')?.classList.add('stop-scrolling');
		} else if (!this.isChecked) {
			setTimeout(() => {
				document.getElementById('header-sec')?.classList.add('d-none');
				document.getElementById('mainbody')?.classList.remove('stop-scrolling');
			}, 100);
		}
	}

	scrollToAboutMe() {
		const element = document.getElementById("app-about-me");
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