import { Component, HostListener, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
		selector: 'app-contact',
		standalone: true,
		imports: [FormsModule],
		templateUrl: './contact.component.html',
		styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

		buttonText: string = 'Send message';

		@HostListener('window:resize', ['$event'])
		onResize(event: Event) {
		  this.checkWindowWidth();
		}
	  
		ngOnInit() {
		  this.checkWindowWidth();
		}
	  
		checkWindowWidth() {
			this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
		}

		constructor() { }

		contactData = {
			name: '',
			email: '',
			message: ''
		}

		mailTest = true;

		http = inject(HttpClient);

		post = {
			endPoint: 'https://maximilian-stark.dev/sendMail.php',
			body: (payload: any) => JSON.stringify(payload),
			options: {
				headers: {
					'Content-Type': 'text/plain',
					responseType: 'text',
				},
			},
		};
	
		onSubmit(ngForm: NgForm) {
		if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
			this.http.post(this.post.endPoint, this.post.body(this.contactData))
				.subscribe({
					next: (response) => {

						ngForm.resetForm();
					},
					error: (error) => {
						console.error(error);
					},
					complete: () => console.info('send post complete'),
				});
		} else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
			console.log(ngForm)
			ngForm.resetForm();
		}
	}
}