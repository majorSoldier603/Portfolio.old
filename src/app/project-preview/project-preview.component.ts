import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-project-preview',
	templateUrl: './project-preview.component.html',
	styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {
	@Input() project:any = {

		title: '',
		img: '',
		Link: '',
		techstack: '',
		gitHubLink: '',
		tldr: '',
		bntname: ''
	};

	@Input() projectId = 0;

	ngOnInit(): void {
		this.fadeInOut(true)
		
		console.log(document.getElementById('1'));
		let projectIdarr = this.projectId.toString()
		console.log('this.projectId: ', projectIdarr, projectIdarr);
	}
	fadeInOut(isFadeOut:boolean) {
		const element = document.querySelector('fade-in-out');
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
}
