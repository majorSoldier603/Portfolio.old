import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	toggelScroll() {
		document.getElementById('mainbody')?.classList.toggle('stop-scrolling');
		
		console.log(document.getElementById('header-sec')?.classList.contains('d-none'));
		if (!document.getElementById('header-sec')?.classList.contains('d-none')) {
			setTimeout(() => {
				document.getElementById('header-sec')?.classList.add('d-none');
			}, 100);
		}
		document.getElementById('header-sec')?.classList.remove('d-none');
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