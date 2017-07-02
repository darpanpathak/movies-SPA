import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/auth.guard';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsComponent} from './pages/charts/charts.component';
import { RouteAppComponent } from './pages/route-app/route-app.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'app',
		pathMatch: 'full'
	},
	{
		path: 'app',
		component: RouteAppComponent,
		children: [{
			path: '',
			redirectTo: 'dashboard',
			pathMatch: 'full'
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
		{
			path: 'charts',
			component: ChartsComponent
		}]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }