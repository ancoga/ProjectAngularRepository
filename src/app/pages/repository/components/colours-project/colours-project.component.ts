// CORE
import { Component, OnInit } from '@angular/core';

// MODELS
import { Color } from '@api/models/Color.model';

@Component({
	selector: 'app-colours-project',
	templateUrl: './colours-project.component.html'
})
export class ColoursProjectComponent implements OnInit {
	listColors: Color[][];
	/**
	 * @constructor
	 */
	constructor() { }
	/**
	 * @description Initialization of the component
	 */
	ngOnInit(): void {
		this.listColors = this.initVariables();
	}
	/**
	 * @description Initialization of component variables
	 */
	initVariables(): Color[][] {
		return [
			[
				{
					name: 'project-primary',
					code: '#f44336',
					text: 'black'
				},
				{
					name: 'project-secondary',
					code: '#78a422',
					text: 'black'
				},
				{
					name: 'project-tertiary',
					code: '#999999',
					text: 'black'
				},
				{
					name: 'project-txt',
					code: '#444444',
					text: 'white'
				},
				{
					name: 'project-bg',
					code: '#eeeeee',
					text: 'black'
				},
			],
			[
				{
					name: 'white',
					code: '#ffffff',
					text: 'black'
				},
				{
					name: 'black',
					code: '#000000',
					text: 'white'
				},
				{
					name: 'disabled',
					code: '#e9ecef',
					text: 'black'
				}
			],
			[
				{
					name: 'default-light',
					code: '#fafafa',
					text: 'black'
				},
				{
					name: 'default-light-1',
					code: '#eeeeee',
					text: 'black'
				},
				{
					name: 'default',
					code: '#bdbdbd',
					text: 'black'
				},
				{
					name: 'default-dark',
					code: '#757575',
					text: 'white'
				},
				{
					name: 'default-dark-1',
					code: '#424242',
					text: 'white'
				},
			],
			[
				{
					name: 'primary-light',
					code: '#c5cae9',
					text: 'black'
				},
				{
					name: 'primary-light-1',
					code: '#7986cb',
					text: 'white'
				},
				{
					name: 'primary',
					code: '#3f51b5',
					text: 'white'
				},
				{
					name: 'primary-dark',
					code: '#303f9f',
					text: 'white'
				},
				{
					name: 'primary-dark-1',
					code: '#1a237e',
					text: 'white'
				},
			],
			[
				{
					name: 'success-light',
					code: '#c8e6c9',
					text: 'black'
				},
				{
					name: 'success-light-1',
					code: '#81c784',
					text: 'black'
				},
				{
					name: 'success',
					code: '#4caf50',
					text: 'black'
				},
				{
					name: 'success-dark',
					code: '#388e3c',
					text: 'white'
				},
				{
					name: 'success-dark-1',
					code: '#1b5e20',
					text: 'white'
				},
			],
			[
				{
					name: 'danger-light',
					code: '#ffcdd2',
					text: 'black'
				},
				{
					name: 'danger-light-1',
					code: '#e57373',
					text: 'black'
				},
				{
					name: 'danger',
					code: '#f44336',
					text: 'white'
				},
				{
					name: 'danger-dark',
					code: '#d32f2f',
					text: 'white'
				},
				{
					name: 'danger-dark-1',
					code: '#b71c1c',
					text: 'white'
				},
			],
			[
				{
					name: 'warning-light',
					code: '#ffe0b2',
					text: 'black'
				},
				{
					name: 'warning-light-1',
					code: '#ffb74d',
					text: 'black'
				},
				{
					name: 'warning',
					code: '#ff9800',
					text: 'black'
				},
				{
					name: 'warning-dark',
					code: '#f57c00',
					text: 'black'
				},
				{
					name: 'warning-dark-1',
					code: '#e65100',
					text: 'white'
				},
			],
			[
				{
					name: 'info-light',
					code: '#bbdefb',
					text: 'black'
				},
				{
					name: 'info-light-1',
					code: '#64b5f6',
					text: 'black'
				},
				{
					name: 'info',
					code: '#2196f3',
					text: 'black'
				},
				{
					name: 'info-dark',
					code: '#1976d2',
					text: 'white'
				},
				{
					name: 'info-dark-1',
					code: '#0d47a1',
					text: 'white'
				},
			],
			[
				{
					name: 'darken-light',
					code: '#f5f5f5',
					text: 'black'
				},
				{
					name: 'darken-light-1',
					code: '#e0e0e0',
					text: 'black'
				},
				{
					name: 'darken',
					code: '#9e9e9e',
					text: 'black'
				},
				{
					name: 'darken-dark',
					code: '#616161',
					text: 'white'
				},
				{
					name: 'darken-dark-1',
					code: '#212121',
					text: 'white'
				},
			]
		];
	}

}
