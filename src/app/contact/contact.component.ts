import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [ FormsModule],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
		this.checkViewportWidth();
	}

	buttonText: string = 'Send message';

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
	  this.checkViewportWidth();
	}
  
	checkViewportWidth() {
	  	this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
	}

	contactFormData = {
		name: '',
		email: '',
		message: ''
	}

	onSubmit(contactForm: NgForm) {
		if (contactForm.valid && contactForm.submitted) {
		}
		console.log(this.contactFormData);
	}
}