import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
	nowActive:string = "undefined"
	
	lastActive = ""
	ngOnInit(): void {
		this.animations()
	}

	animations() {
		document.getElementById("app-root")?.addEventListener("click", (event) => {this.contactForm();});
	}

	contactForm() {
		if (this.lastActive) {
			let x = document.getElementById(this.lastActive)?.parentElement?.classList.remove("active")
			console.log('x: ', x);
		}
	}

	checkOnFlyValidForm() {

	}
	
	inputFieldClickHandler(event: Event) {
		event.stopPropagation();
		console.log(event)
		if (this.lastActive) {
			this.contactForm();
			this.checkOnFlyValidForm();
		}
		
		if (event.target instanceof Element) {
			console.log('Clicked element ID:', event.target.id);
			this.lastActive = event.target.id
			this.nowActive = event.target.id
			this.fieldFade(this.nowActive);
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
	ErrorMargin: string = 'null'

	checkboxChanged() {
		this.wasUsed = true
		if (this.isChecked && !this.previousState) {
			this.displaySwitch = '0'
			this.addMargin = '15px'
			this.divnone = "none"
			this.ErrorMargin = 'null'
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
			this.addMargin = "15px"
			this.ErrorMargin = '-10px'
		}
	}

	onHover() {
		// Code to execute when the mouse pointer enters the arrow container
		console.log('Hovered over arrow!');
	}
	
	onMouseOut() {
		// Code to execute when the mouse pointer leaves the arrow container
		console.log('Mouse out of arrow!');
	}
}