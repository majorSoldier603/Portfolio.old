import { Component, ElementRef, ViewChild, asNativeElements } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
@ViewChild('AFrom') AFrom!: ElementRef;
@ViewChild('name') name!: ElementRef;
@ViewChild('email') email!: ElementRef;
@ViewChild('msg') msg!: ElementRef;
@ViewChild('submitbnt') submitbnt!: ElementRef;
	fromElements: HTMLElement | null | undefined;

	constructor() { }
		
	ngOnInit(): void { }

	sendMail() {
		console.log("Sending Mail");
		this.fromElements = document.getElementById('myForm');
		let fd = new FormData(this.AFrom.nativeElement); 
		this.msg.nativeElement
		this.disenabelXD(true);
	}

	disenabelXD(is: boolean) {
		if (this.fromElements) {
			this.fromElements.childNodes.forEach(element => {
				(element as HTMLInputElement).disabled = is;
			});	
		}
	}
}
