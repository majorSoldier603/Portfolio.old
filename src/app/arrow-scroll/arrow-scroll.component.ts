import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
	selector: 'app-arrow-scroll',
	templateUrl: './arrow-scroll.component.html',
	styleUrls: ['./arrow-scroll.component.scss']
})
export class ArrowScrollComponent implements OnInit {
	ngOnInit() {
		AOS.init();
	}
}
