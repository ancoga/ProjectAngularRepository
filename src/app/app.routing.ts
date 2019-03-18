// CORE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { LayoutRepositoryComponent } from './layout/layout-repository/layout-repository.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/repository/home'
	},
	{
		path: 'repository',
		component: LayoutRepositoryComponent,
		loadChildren: './pages/repository/repository.module#RepositoryModule'
		// canActivate: [AuthGuard] // Token authentication
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
