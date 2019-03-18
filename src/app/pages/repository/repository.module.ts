// CORE
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTING
import { RepositoryRoutingModule } from './repository.routing';

// PRIMENG
import { MenuModule } from 'primeng/menu';
import { CodeHighlighterModule } from 'primeng/codehighlighter';

// COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { TypographyComponent } from './components/typography/typography.component';
import { WidgetsCardComponent } from './components/widgets-card/widgets-card.component';
import { ColoursProjectComponent } from './components/colours-project/colours-project.component';
import { ColoursMaterialComponent } from './components/colours-material/colours-material.component';
import { FormsInputComponent } from './components/forms-input/forms-input.component';
import { FormsTextareaComponent } from './components/forms-textarea/forms-textarea.component';
import { FormsCheckboxComponent } from './components/forms-checkbox/forms-checkbox.component';
import { FormsRadiobuttonComponent } from './components/forms-radiobutton/forms-radiobutton.component';
import { WidgetsInfoboxComponent } from './components/widgets-infobox/widgets-infobox.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
	imports: [
		CommonModule,
		RepositoryRoutingModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		MenuModule,
		CodeHighlighterModule
	],
	declarations: [
		HomeComponent,
		TypographyComponent,
		WidgetsCardComponent,
		ColoursProjectComponent,
		ColoursMaterialComponent,
		FormsInputComponent,
		FormsTextareaComponent,
		FormsCheckboxComponent,
		FormsRadiobuttonComponent,
		WidgetsInfoboxComponent,
		AlertsComponent,
		BreadcrumbComponent,
		ButtonComponent
	],
	providers: []
})
export class RepositoryModule { }
