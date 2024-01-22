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

	constructor() { 

	}
	
	
	lastActive = ""
	ngOnInit(): void {
		this.animations()
		
	}

	animations() {
	const appRoot = document.getElementById("app-root");
		if (appRoot) {
			appRoot.addEventListener("click", (event) => {this.contactForm()});
		} else {
			console.error("contact component appRoot element not found");
		}
	}

	contactForm() {
		if (this.lastActive) {
			let x = document.getElementById(this.lastActive)?.parentElement?.classList.remove("active")
			console.log('x: ', x);
		}
	}
	
	inputFieldClickHandler(event: Event) {
		event.stopPropagation();
		console.log(event)
		if (this.lastActive) {
			this.contactForm();
		}
		if (event.target instanceof Element) {
			console.log('Clicked element ID:', event.target.id);
			this.lastActive = event.target.id
			let nowActive = event.target.id

			this.fieldFade(nowActive)
		}
	}

	fieldFade(nowActive: string) {
		let x = document.getElementById(nowActive)?.parentElement?.classList.add("active")
	}













	async sendMail() {
		console.log("Sending Mail");

		this.fromElements = document.getElementById('myForm');
		this.disenabelXD(true);

		let nameField = this.name.nativeElement
		let emailField = this.email.nativeElement
		let msgField = this.msg.nativeElement

		let fd = new FormData(); 
		fd.append('name', nameField.value)
		fd.append('email', emailField.value);
		fd.append('msg', msgField.value);
		await fetch('https://maximilian-stark.developerakademie.net/send_mail/send_mail.php',
			{
				method: 'POST',
				body: fd
			}
		)

		this.disenabelXD(false);
	}

	disenabelXD(is: boolean) {
		if (this.fromElements) {
			this.fromElements.childNodes.forEach(element => {
				(element as HTMLInputElement).disabled = is;
			});
		}
	}



	gimmeNumber(x:string) {
		let y: number = +x;
		return y
	}
}
