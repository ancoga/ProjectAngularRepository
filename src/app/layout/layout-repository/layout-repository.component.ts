// CORE
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

// SERVICES
import { UserService } from '@api/user/user.service';

// MODELS
import { User } from '@api/user/models/user';
import { Menu } from '@api/models/Menu.model';

@Component({
	selector: 'app-layout-repository',
	templateUrl: './layout-repository.component.html'
})
export class LayoutRepositoryComponent implements OnInit {
	progressbar: boolean; // Progressbar loading
	listMenu: Menu[]; // Menu repository
	userData: User; // User data
	/**
	 * @constructor
	 */
	constructor(
		private router: Router,
		private userServices: UserService
	) {
		this.progressbar = true;
		this.router.events.subscribe((event: RouterEvent) => {
			this.navigationInterceptor(event);
		});
	}
	/**
	 * @description Initialization of the component
	 */
	ngOnInit(): void {
		this.listMenu = this.getListMenu();
		this.getUserDatas();
	}
	/**
	 * @description Get list menu
	 * @return {Menu[]}
	 */
	getListMenu(): Menu[] {
		return [
			{
				name: 'Home',
				routerLink: '/repository/home',
				active: false,
				icon: 'home'
			}, {
				name: 'Colors',
				active: false,
				icon: 'color_lens',
				submenu: [
					{
						name: 'Project',
						routerLink: 'colors/project'
					}, {
						name: 'Material',
						routerLink: 'colors/material'
					}
				]
			}, {
				name: 'Typography',
				routerLink: '/repository/typography',
				active: false,
				icon: 'text_fields'
			}, {
				name: 'Forms',
				active: false,
				icon: 'assignment',
				submenu: [
					{
						name: 'Input',
						routerLink: 'forms/input'
					}, {
						name: 'Textarea',
						routerLink: 'forms/textarea'
					}, {
						name: 'Checkbox',
						routerLink: 'forms/checkbox'
					}, {
						name: 'Radiobutton',
						routerLink: 'forms/radiobutton'
					}
				]
			}, {
				name: 'Widgets',
				active: false,
				icon: 'widgets',
				submenu: [
					{
						name: 'Cards',
						routerLink: 'widgets/cards'
					}, {
						name: 'Infobox',
						routerLink: 'widgets/infobox'
					}, {
						name: 'Breadcrumbs',
						routerLink: 'widgets/breadcrumbs'
					}, {
						name: 'Buttons',
						routerLink: 'widgets/buttons'
					}
				]
			}, {
				name: 'Messages',
				active: false,
				icon: 'message',
				submenu: [
					{
						name: 'Alert',
						routerLink: 'messages/alerts'
					}
				]
			}
		];
	}
	/**
	 * @description Get user's data services
	 */
	getUserDatas(): void {
		this.userServices.getUserDatas().subscribe(
			(resp: User) => {
				this.userData = resp;
			},
			(err: HttpErrorResponse) => {
				if (!(err.error instanceof Error)) {
					console.error('Ha fallado el servicio getUserDatas', err);
				}
			}
		);
	}
	/**
	 * @description Shows and hides the loading spinner during RouterEvent changes
	 * @param {RouterEvent} event
	 */
	navigationInterceptor(event: RouterEvent): void {
		switch (true) {
			case event instanceof NavigationStart: {
				this.progressbar = true;
				break;
			}
			case event instanceof NavigationEnd:
			case event instanceof NavigationCancel:
			case event instanceof NavigationError: {
				this.progressbar = false;
				break;
			}
			default: {
				break;
			}
		}
	}
}
