import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SocialiconsComponent } from './socialicons/socialicons.component';
import { LegaltextanibntComponent } from './legaltextanibnt/legaltextanibnt.component';
import { OnScrollArrowComponent } from './on-scroll-arrow/on-scroll-arrow.component';
import { ContactScrollUpComponent } from './contact-scroll-up/contact-scroll-up.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HeroComponent,
		AboutMeComponent,
		MySkillsComponent,
		ProjectListComponent,
		ProjectPreviewComponent,
		ContactComponent,
		FooterComponent,
		SocialiconsComponent,
		LegaltextanibntComponent,
		OnScrollArrowComponent,
		ContactScrollUpComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
