import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ArrowScrollLeftComponent } from './arrow-scroll-left/arrow-scroll-left.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AppArrowScrollRightComponent } from './app-arrow-scroll-right/app-arrow-scroll-right.component';
import { FooterComponent } from './footer/footer.component';
import { SocialiconsComponent } from './socialicons/socialicons.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HeroComponent,
  		AboutMeComponent,
	 MySkillsComponent,
	 ArrowScrollLeftComponent,
	 ProjectListComponent,
	 ProjectPreviewComponent,
  ContactComponent,
  AppArrowScrollRightComponent,
  FooterComponent,
  SocialiconsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
