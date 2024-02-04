import { Component, ElementRef, OnInit, ViewChild, asNativeElements } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@ViewChild('AFrom') AFrom!: ElementRef;
@ViewChild('name') name!: ElementRef;
@ViewChild('email') email!: ElementRef;
@ViewChild('msg') msg!: ElementRef;
@ViewChild('submitbnt') submitbnt!: ElementRef;
@ViewChild('emailbnt') appContactEmailBnt!: ElementRef;
	fromElements: HTMLElement | null | undefined;
	isChecked: boolean = false;
	previousState: boolean = false;
	wasUsed: boolean = false;
	divnone: string = "block";
	
	lastActive = ""
	ngOnInit(): void {
		this.animations()
	}

	animations() {
		document.getElementById("app-root")?.addEventListener("click", (event) => {this.contactForm()});
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

	bgColor: string = 'FFFCF3';
	textColor: string = '#BBBBBB';

	changeBntColor(isHold:boolean) {
		console.log(isHold, this.textColor, this.bgColor)
		if (isHold) {
			this.bgColor = '#FFFCF3';
			this.textColor = 'black';
		} else {
			this.bgColor = 'black';
			this.textColor = '#FFFCF3';
		}
	}

	changeTextColor() {
		console.log(this.isChecked)
		if (!this.isChecked) {
			this.textColor = '#FFFCF3';
		} else {
			this.textColor = '#807f7f';
		}
	}

	displaySwitch: string = '0';
	addMargin: string = '10px'

	checkboxChanged() {
		this.wasUsed = true
		if (this.isChecked && !this.previousState) {
			this.displaySwitch = '0'
			this.addMargin = '15px'
		} else if (!this.isChecked && this.previousState) {
			this.displaySwitch = '1'
		}
		this.previousState = this.isChecked;
	}

	handleDisabledBnt() {
		console.log("ll", this.wasUsed);
		if (!this.wasUsed && !this.isChecked) {
			this.displaySwitch = '1'
			this.divnone = "none"
		}
	}
}