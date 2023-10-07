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

	ngOnInit() {}

	constructor() {}

	hover(elementID:number, state:boolean) {
		console.log('hovering over element ' + elementID + ' with state ' + state);
		if (state) {
			const elementRef = document.getElementById(elementID.toString());
			if (elementRef) {
				elementRef.className = 'right-hover';
			} else if (elementRef) {
				//elementRef.className = 'right';
			}
		} else {}
	}
}