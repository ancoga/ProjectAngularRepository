// CORE
import { Component, OnInit } from '@angular/core';

// MODELS
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
	selector: 'app-widgets-card',
	templateUrl: './widgets-card.component.html'
})
export class WidgetsCardComponent implements OnInit {
	menuItems: MenuItem[];
	/**
	 * @constructor
	 */
	constructor() { }
	/**
	 * @description Initialization of the component
	 */
	ngOnInit(): void {
		this.menuItems = [
			{label: 'Nuevo'},
			{label: 'Actualizar'},
			{label: 'Elimin'}
		];
	}

}
