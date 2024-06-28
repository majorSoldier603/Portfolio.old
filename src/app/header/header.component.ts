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
			document.getElementById('mainbody')?.classList.add('stop-scrolling');
		} else if (!this.isChecked) {
			setTimeout(() => {
				document.getElementById('mainbody')?.classList.remove('stop-scrolling');
			}, 100);
		}
	}

	scrollToAboutMe(elementID: string) {
		this.isChecked = false
		document.getElementById('mainbody')?.classList.remove('stop-scrolling');

		console.log(document.getElementById("menu-toggle"));
		const element = document.getElementById(elementID);
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