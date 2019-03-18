// CORE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { ColoursProjectComponent } from './components/colours-project/colours-project.component';
import { TypographyComponent } from './components/typography/typography.component';
import { WidgetsCardComponent } from './components/widgets-card/widgets-card.component';
import { ColoursMaterialComponent } from './components/colours-material/colours-material.component';
import { FormsInputComponent } from './components/forms-input/forms-input.component';
import { FormsTextareaComponent } from './components/forms-textarea/forms-textarea.component';
import { FormsRadiobuttonComponent } from './components/forms-radiobutton/forms-radiobutton.component';
import { FormsCheckboxComponent } from './components/forms-checkbox/forms-checkbox.component';
import { WidgetsInfoboxComponent } from './components/widgets-infobox/widgets-infobox.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './components/button/button.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	}, {
		path: 'colors',
		children: [
			{
				path: 'project',
				component: ColoursProjectComponent,
			}, {
				path: 'material',
				component: ColoursMaterialComponent
			}
		]
	}, {
		path: 'typography',
		component: TypographyComponent
	}, {
		path: 'forms',
		children: [
			{
				path: 'input',
				component: FormsInputComponent
			}, {
				path: 'textarea',
				component: FormsTextareaComponent
			}, {
				path: 'checkbox',
				component: FormsCheckboxComponent
			}, {
				path: 'radiobutton',
				component: FormsRadiobuttonComponent
			}
		]
	}, {
		path: 'widgets',
		children: [
			{
				path: 'cards',
				component: WidgetsCardComponent
			}, {
				path: 'infobox',
				component: WidgetsInfoboxComponent
			}, {
				path: 'breadcrumbs',
				component: BreadcrumbComponent
			}, {
				path: 'buttons',
				component: ButtonComponent
			}
		]
	}, {
		path: 'messages',
		children: [
			{
				path: 'alerts',
				component: AlertsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class RepositoryRoutingModule { }
