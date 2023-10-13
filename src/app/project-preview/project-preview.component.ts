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
	side: string | undefined;

	ngOnInit() {}

	constructor() {}

	hoverin(elementID:number) {
		this.whichsideishoverd(elementID);	
		let elementRef = document.getElementById(elementID.toString());	
		if (elementRef) {
			elementRef.className = this.side + '-hover' + ' ' + this.side;	
		}
	}

	hoverout(elementID:number) {
		this.whichsideishoverd(elementID)
		let elementRef = document.getElementById(elementID.toString());
		if (elementRef) {
			elementRef.className = this.side || '';'/'
		}
	}

	whichsideishoverd(elementID:number) {
		this.side = elementID % 2 === 0 ? 'right' : 'left';
	}
}