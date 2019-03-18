// CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ROUTING
import { AppRoutingModule } from './app.routing';

// COMPONENTS
import { AppComponent } from '@app/app.component';
import { LayoutRepositoryComponent } from '@app/layout/layout-repository/layout-repository.component';

// SERVICES
import { UserService } from '@api/user/user.service';

// PRIMENG
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
	declarations: [
		AppComponent,
		LayoutRepositoryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ProgressBarModule
	],
	providers: [
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
