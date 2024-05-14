import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-contact',
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
  
	checkViewportWidth() {
	  	this.buttonText = window.innerWidth < 900 ? 'Say hello ;)' : 'Send message';
	}

	contactFormData = {
		name: '',
		email: '',
		message: ''
	}


	mailTest = true;

	http = inject(HttpClient);

	post = {
	  endPoint: '/sendMail.php',
	  body: (payload: any) => JSON.stringify(payload),
	  options: {
		headers: {
		  'Content-Type': 'text/plain',
		  responseType: 'text',
		},
	  },
	};

	posttest = {
		endPoint: '/testmail.php',
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
		this.http.post(this.post.endPoint, this.post.body(this.contactFormData))
		  .subscribe({
			next: (response) => {
				console.log(response);
			  ngForm.resetForm();
			},
			error: (error) => {
			  console.error(error);
			},
			complete: () => console.info('send post complete'),
		  });
	  } else if (ngForm.submitted && this.mailTest) {
		this.http.post(this.posttest.endPoint, this.post.body(this.contactFormData))
		  .subscribe({
			next: (response) => {
				console.log(response);
			  ngForm.resetForm();
			},
			error: (error) => {
			  console.error(error);
			},
			complete: () => console.info('send testpost complete'),
		});
	  	}
	}
}