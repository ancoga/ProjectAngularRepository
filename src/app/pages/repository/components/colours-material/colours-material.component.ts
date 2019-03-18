// CORE
import { Component, OnInit } from '@angular/core';

// MODELS
import { Color } from '@api/models/Color.model';

@Component({
	selector: 'app-colours-material',
	templateUrl: './colours-material.component.html'
})
export class ColoursMaterialComponent implements OnInit {
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
					name: 'red-50',
					code: '#ffebee',
					text: 'black'
				},
				{
					name: 'red-100',
					code: '#ffcdd2',
					text: 'black'
				},
				{
					name: 'red-200',
					code: '#ef9a9a',
					text: 'black'
				},
				{
					name: 'red-300',
					code: '#e57373',
					text: 'black'
				},
				{
					name: 'red-400',
					code: '#ef5350',
					text: 'white'
				},
				{
					name: 'red-500',
					code: '#f44336',
					text: 'white'
				},
				{
					name: 'red-600',
					code: '#e53935',
					text: 'white'
				},
				{
					name: 'red-700',
					code: '#d32f2f',
					text: 'white'
				},
				{
					name: 'red-800',
					code: '#c62828',
					text: 'white'
				},
				{
					name: 'red-900',
					code: '#b71c1c',
					text: 'white'
				},
				{
					name: 'red-A100',
					code: '#ff8a80',
					text: 'black'
				},
				{
					name: 'red-A200',
					code: '#ff5252',
					text: 'white'
				},
				{
					name: 'red-A400',
					code: '#ff1744',
					text: 'white'
				},
				{
					name: 'red-A700',
					code: '#d50000',
					text: 'white'
				},
			],
			[
				{
					name: 'pink-50',
					code: '#fce4ec',
					text: 'black'
				},
				{
					name: 'pink-100',
					code: '#f8bbd0',
					text: 'black'
				},
				{
					name: 'pink-200',
					code: '#f48fb1',
					text: 'black'
				},
				{
					name: 'pink-300',
					code: '#f06292',
					text: 'black'
				},
				{
					name: 'pink-400',
					code: '#ec407a',
					text: 'white'
				},
				{
					name: 'pink-500',
					code: '#e91e63',
					text: 'white'
				},
				{
					name: 'pink-600',
					code: '#d81b60',
					text: 'white'
				},
				{
					name: 'pink-700',
					code: '#c2185b',
					text: 'white'
				},
				{
					name: 'pink-800',
					code: '#ad1457',
					text: 'white'
				},
				{
					name: 'pink-900',
					code: '#880e4f',
					text: 'white'
				},
				{
					name: 'pink-A100',
					code: '#ff80ab',
					text: 'black'
				},
				{
					name: 'pink-A200',
					code: '#ff4081',
					text: 'white'
				},
				{
					name: 'pink-A400',
					code: '#f50057',
					text: 'white'
				},
				{
					name: 'pink-A700',
					code: '#c51162',
					text: 'white'
				},
			],
			[
				{
					name: 'purple-50',
					code: '#f3e5f5',
					text: 'black'
				},
				{
					name: 'purple-100',
					code: '#e1bee7',
					text: 'black'
				},
				{
					name: 'purple-200',
					code: '#ce93d8',
					text: 'black'
				},
				{
					name: 'purple-300',
					code: '#ba68c8',
					text: 'white'
				},
				{
					name: 'purple-400',
					code: '#ab47bc',
					text: 'white'
				},
				{
					name: 'purple-500',
					code: '#9c27b0',
					text: 'white'
				},
				{
					name: 'purple-600',
					code: '#8e24aa',
					text: 'white'
				},
				{
					name: 'purple-700',
					code: '#7b1fa2',
					text: 'white'
				},
				{
					name: 'purple-800',
					code: '#6a1b9a',
					text: 'white'
				},
				{
					name: 'purple-900',
					code: '#4a148c',
					text: 'white'
				},
				{
					name: 'purple-A100',
					code: '#ea80fc',
					text: 'black'
				},
				{
					name: 'purple-A200',
					code: '#e040fb',
					text: 'white'
				},
				{
					name: 'purple-A400',
					code: '#d500f9',
					text: 'white'
				},
				{
					name: 'purple-A700',
					code: '#aa00ff',
					text: 'white'
				},
			],
			[
				{
					name: 'deep-purple-50',
					code: '#ede7f6',
					text: 'black'
				},
				{
					name: 'deep-purple-100',
					code: '#d1c4e9',
					text: 'black'
				},
				{
					name: 'deep-purple-200',
					code: '#b39ddb',
					text: 'black'
				},
				{
					name: 'deep-purple-300',
					code: '#9575cd',
					text: 'white'
				},
				{
					name: 'deep-purple-400',
					code: '#7e57c2',
					text: 'white'
				},
				{
					name: 'deep-purple-500',
					code: '#673ab7',
					text: 'white'
				},
				{
					name: 'deep-purple-600',
					code: '#5e35b1',
					text: 'white'
				},
				{
					name: 'deep-purple-700',
					code: '#512da8',
					text: 'white'
				},
				{
					name: 'deep-purple-800',
					code: '#4527a0',
					text: 'white'
				},
				{
					name: 'deep-purple-900',
					code: '#311b92',
					text: 'white'
				},
				{
					name: 'deep-purple-A100',
					code: '#b388ff',
					text: 'black'
				},
				{
					name: 'deep-purple-A200',
					code: '#7c4dff',
					text: 'white'
				},
				{
					name: 'deep-purple-A400',
					code: '#651fff',
					text: 'white'
				},
				{
					name: 'deep-purple-A700',
					code: '#6200ea',
					text: 'white'
				},
			],
			[
				{
					name: 'indigo-50',
					code: '#e8eaf6',
					text: 'black'
				},
				{
					name: 'indigo-100',
					code: '#c5cae9',
					text: 'black'
				},
				{
					name: 'indigo-200',
					code: '#9fa8da',
					text: 'black'
				},
				{
					name: 'indigo-300',
					code: '#7986cb',
					text: 'white'
				},
				{
					name: 'indigo-400',
					code: '#5c6bc0',
					text: 'white'
				},
				{
					name: 'indigo-500',
					code: '#3f51b5',
					text: 'white'
				},
				{
					name: 'indigo-600',
					code: '#3949ab',
					text: 'white'
				},
				{
					name: 'indigo-700',
					code: '#303f9f',
					text: 'white'
				},
				{
					name: 'indigo-800',
					code: '#283593',
					text: 'white'
				},
				{
					name: 'indigo-900',
					code: '#1a237e',
					text: 'white'
				},
				{
					name: 'indigo-A100',
					code: '#8c9eff',
					text: 'black'
				},
				{
					name: 'indigo-A200',
					code: '#536dfe',
					text: 'white'
				},
				{
					name: 'indigo-A400',
					code: '#3d5afe',
					text: 'white'
				},
				{
					name: 'indigo-A700',
					code: '#304ffe',
					text: 'white'
				},
			],
			[
				{
					name: 'blue-50',
					code: '#e3f2fd',
					text: 'black'
				},
				{
					name: 'blue-100',
					code: '#bbdefb',
					text: 'black'
				},
				{
					name: 'blue-200',
					code: '#90caf9',
					text: 'black'
				},
				{
					name: 'blue-300',
					code: '#64b5f6',
					text: 'black'
				},
				{
					name: 'blue-400',
					code: '#42a5f5',
					text: 'black'
				},
				{
					name: 'blue-500',
					code: '#2196f3',
					text: 'black'
				},
				{
					name: 'blue-600',
					code: '#1e88e5',
					text: 'white'
				},
				{
					name: 'blue-700',
					code: '#1976d2',
					text: 'white'
				},
				{
					name: 'blue-800',
					code: '#1565c0',
					text: 'white'
				},
				{
					name: 'blue-900',
					code: '#0d47a1',
					text: 'white'
				},
				{
					name: 'blue-A100',
					code: '#82b1ff',
					text: 'black'
				},
				{
					name: 'blue-A200',
					code: '#448aff',
					text: 'white'
				},
				{
					name: 'blue-A400',
					code: '#2979ff',
					text: 'white'
				},
				{
					name: 'blue-A700',
					code: '#2962ff',
					text: 'white'
				},
			],
			[
				{
					name: 'light-blue-50',
					code: '#e1f5fe',
					text: 'black'
				},
				{
					name: 'light-blue-100',
					code: '#b3e5fc',
					text: 'black'
				},
				{
					name: 'light-blue-200',
					code: '#81d4fa',
					text: 'black'
				},
				{
					name: 'light-blue-300',
					code: '#4fc3f7',
					text: 'black'
				},
				{
					name: 'light-blue-400',
					code: '#29b6f6',
					text: 'black'
				},
				{
					name: 'light-blue-500',
					code: '#03a9f4',
					text: 'black'
				},
				{
					name: 'light-blue-600',
					code: '#039be5',
					text: 'black'
				},
				{
					name: 'light-blue-700',
					code: '#0288d1',
					text: 'white'
				},
				{
					name: 'light-blue-800',
					code: '#0277bd',
					text: 'white'
				},
				{
					name: 'light-blue-900',
					code: '#01579b',
					text: 'white'
				},
				{
					name: 'light-blue-A100',
					code: '#80d8ff',
					text: 'black'
				},
				{
					name: 'light-blue-A200',
					code: '#40c4ff',
					text: 'black'
				},
				{
					name: 'light-blue-A400',
					code: '#00b0ff',
					text: 'black'
				},
				{
					name: 'light-blue-A700',
					code: '#0091ea',
					text: 'white'
				},
			],
			[
				{
					name: 'cyan-50',
					code: '#e0f7fa',
					text: 'black'
				},
				{
					name: 'cyan-100',
					code: '#b2ebf2',
					text: 'black'
				},
				{
					name: 'cyan-200',
					code: '#80deea',
					text: 'black'
				},
				{
					name: 'cyan-300',
					code: '#4dd0e1',
					text: 'black'
				},
				{
					name: 'cyan-400',
					code: '#26c6da',
					text: 'black'
				},
				{
					name: 'cyan-500',
					code: '#00bcd4',
					text: 'black'
				},
				{
					name: 'cyan-600',
					code: '#00acc1',
					text: 'black'
				},
				{
					name: 'cyan-700',
					code: '#0097a7',
					text: 'white'
				},
				{
					name: 'cyan-800',
					code: '#00838f',
					text: 'white'
				},
				{
					name: 'cyan-900',
					code: '#006064',
					text: 'white'
				},
				{
					name: 'cyan-A100',
					code: '#84ffff',
					text: 'black'
				},
				{
					name: 'cyan-A200',
					code: '#18ffff',
					text: 'black'
				},
				{
					name: 'cyan-A400',
					code: '#00e5ff',
					text: 'black'
				},
				{
					name: 'cyan-A700',
					code: '#00b8d4',
					text: 'black'
				},
			],
			[
				{
					name: 'teal-50',
					code: '#e0f2f1',
					text: 'black'
				},
				{
					name: 'teal-100',
					code: '#b2dfdb',
					text: 'black'
				},
				{
					name: 'teal-200',
					code: '#80cbc4',
					text: 'black'
				},
				{
					name: 'teal-300',
					code: '#4db6ac',
					text: 'black'
				},
				{
					name: 'teal-400',
					code: '#26a69a',
					text: 'black'
				},
				{
					name: 'teal-500',
					code: '#009688',
					text: 'white'
				},
				{
					name: 'teal-600',
					code: '#00897b',
					text: 'white'
				},
				{
					name: 'teal-700',
					code: '#00796b',
					text: 'white'
				},
				{
					name: 'teal-800',
					code: '#00695c',
					text: 'white'
				},
				{
					name: 'teal-900',
					code: '#004d40',
					text: 'white'
				},
				{
					name: 'teal-A100',
					code: '#a7ffeb',
					text: 'black'
				},
				{
					name: 'teal-A200',
					code: '#64ffda',
					text: 'black'
				},
				{
					name: 'teal-A400',
					code: '#1de9b6',
					text: 'black'
				},
				{
					name: 'teal-A700',
					code: '#00bfa5',
					text: 'black'
				},
			],
			[
				{
					name: 'green-50',
					code: '#e8f5e9',
					text: 'black'
				},
				{
					name: 'green-100',
					code: '#c8e6c9',
					text: 'black'
				},
				{
					name: 'green-200',
					code: '#a5d6a7',
					text: 'black'
				},
				{
					name: 'green-300',
					code: '#81c784',
					text: 'black'
				},
				{
					name: 'green-400',
					code: '#66bb6a',
					text: 'black'
				},
				{
					name: 'green-500',
					code: '#4caf50',
					text: 'black'
				},
				{
					name: 'green-600',
					code: '#43a047',
					text: 'white'
				},
				{
					name: 'green-700',
					code: '#388e3c',
					text: 'white'
				},
				{
					name: 'green-800',
					code: '#2e7d32',
					text: 'white'
				},
				{
					name: 'green-900',
					code: '#1b5e20',
					text: 'white'
				},
				{
					name: 'green-A100',
					code: '#b9f6ca',
					text: 'black'
				},
				{
					name: 'green-A200',
					code: '#69f0ae',
					text: 'black'
				},
				{
					name: 'green-A400',
					code: '#00e676',
					text: 'black'
				},
				{
					name: 'green-A700',
					code: '#00c853',
					text: 'black'
				},
			],
			[
				{
					name: 'light-green-50',
					code: '#f1f8e9',
					text: 'black'
				},
				{
					name: 'light-green-100',
					code: '#dcedc8',
					text: 'black'
				},
				{
					name: 'light-green-200',
					code: '#c5e1a5',
					text: 'black'
				},
				{
					name: 'light-green-300',
					code: '#aed581',
					text: 'black'
				},
				{
					name: 'light-green-400',
					code: '#9ccc65',
					text: 'black'
				},
				{
					name: 'light-green-500',
					code: '#8bc34a',
					text: 'black'
				},
				{
					name: 'light-green-600',
					code: '#7cb342',
					text: 'white'
				},
				{
					name: 'light-green-700',
					code: '#689f38',
					text: 'black'
				},
				{
					name: 'light-green-800',
					code: '#558b2f',
					text: 'white'
				},
				{
					name: 'light-green-900',
					code: '#33691e',
					text: 'white'
				},
				{
					name: 'light-green-A100',
					code: '#ccff90',
					text: 'black'
				},
				{
					name: 'light-green-A200',
					code: '#b2ff59',
					text: 'black'
				},
				{
					name: 'light-green-A400',
					code: '#76ff03',
					text: 'black'
				},
				{
					name: 'light-green-A700',
					code: '#64dd17',
					text: 'black'
				},
			],
			[
				{
					name: 'lime-50',
					code: '#f9fbe7',
					text: 'black'
				},
				{
					name: 'lime-100',
					code: '#f0f4c3',
					text: 'black'
				},
				{
					name: 'lime-200',
					code: '#e6ee9c',
					text: 'black'
				},
				{
					name: 'lime-300',
					code: '#dce775',
					text: 'black'
				},
				{
					name: 'lime-400',
					code: '#d4e157',
					text: 'black'
				},
				{
					name: 'lime-500',
					code: '#cddc39',
					text: 'black'
				},
				{
					name: 'lime-600',
					code: '#c0ca33',
					text: 'black'
				},
				{
					name: 'lime-700',
					code: '#afb42b',
					text: 'black'
				},
				{
					name: 'lime-800',
					code: '#9e9d24',
					text: 'black'
				},
				{
					name: 'lime-900',
					code: '#827717',
					text: 'white'
				},
				{
					name: 'lime-A100',
					code: '#f4ff81',
					text: 'black'
				},
				{
					name: 'lime-A200',
					code: '#eeff41',
					text: 'black'
				},
				{
					name: 'lime-A400',
					code: '#c6ff00',
					text: 'black'
				},
				{
					name: 'lime-A700',
					code: '#aeea00',
					text: 'black'
				},
			],
			[
				{
					name: 'yellow-50',
					code: '#fffde7',
					text: 'black'
				},
				{
					name: 'yellow-100',
					code: '#fff9c4',
					text: 'black'
				},
				{
					name: 'yellow-200',
					code: '#fff59d',
					text: 'black'
				},
				{
					name: 'yellow-300',
					code: '#fff176',
					text: 'black'
				},
				{
					name: 'yellow-400',
					code: '#ffee58',
					text: 'black'
				},
				{
					name: 'yellow-500',
					code: '#ffeb3b',
					text: 'black'
				},
				{
					name: 'yellow-600',
					code: '#fdd835',
					text: 'black'
				},
				{
					name: 'yellow-700',
					code: '#fbc02d',
					text: 'black'
				},
				{
					name: 'yellow-800',
					code: '#f9a825',
					text: 'black'
				},
				{
					name: 'yellow-900',
					code: '#f57f17',
					text: 'black'
				},
				{
					name: 'yellow-A100',
					code: '#ffff8d',
					text: 'black'
				},
				{
					name: 'yellow-A200',
					code: '#ffff00',
					text: 'black'
				},
				{
					name: 'yellow-A400',
					code: '#ffea00',
					text: 'black'
				},
				{
					name: 'yellow-A700',
					code: '#ffd600',
					text: 'black'
				},
			],
			[
				{
					name: 'amber-50',
					code: '#fff8e1',
					text: 'black'
				},
				{
					name: 'amber-100',
					code: '#ffecb3',
					text: 'black'
				},
				{
					name: 'amber-200',
					code: '#ffe082',
					text: 'black'
				},
				{
					name: 'amber-300',
					code: '#ffd54f',
					text: 'black'
				},
				{
					name: 'amber-400',
					code: '#ffca28',
					text: 'black'
				},
				{
					name: 'amber-500',
					code: '#ffc107',
					text: 'black'
				},
				{
					name: 'amber-600',
					code: '#ffb300',
					text: 'black'
				},
				{
					name: 'amber-700',
					code: '#ffa000',
					text: 'black'
				},
				{
					name: 'amber-800',
					code: '#ff8f00',
					text: 'black'
				},
				{
					name: 'amber-900',
					code: '#ff6f00',
					text: 'black'
				},
				{
					name: 'amber-A100',
					code: '#ffe57f',
					text: 'black'
				},
				{
					name: 'amber-A200',
					code: '#ffd740',
					text: 'black'
				},
				{
					name: 'amber-A400',
					code: '#ffc400',
					text: 'black'
				},
				{
					name: 'amber-A700',
					code: '#ffab00',
					text: 'black'
				},
			],
			[
				{
					name: 'orange-50',
					code: '#fff3e0',
					text: 'black'
				},
				{
					name: 'orange-100',
					code: '#ffe0b2',
					text: 'black'
				},
				{
					name: 'orange-200',
					code: '#ffcc80',
					text: 'black'
				},
				{
					name: 'orange-300',
					code: '#ffb74d',
					text: 'black'
				},
				{
					name: 'orange-400',
					code: '#ffa726',
					text: 'black'
				},
				{
					name: 'orange-500',
					code: '#ff9800',
					text: 'black'
				},
				{
					name: 'orange-600',
					code: '#fb8c00',
					text: 'black'
				},
				{
					name: 'orange-700',
					code: '#f57c00',
					text: 'black'
				},
				{
					name: 'orange-800',
					code: '#ef6c00',
					text: 'black'
				},
				{
					name: 'orange-900',
					code: '#e65100',
					text: 'white'
				},
				{
					name: 'orange-A100',
					code: '#ffd180',
					text: 'black'
				},
				{
					name: 'orange-A200',
					code: '#ffab40',
					text: 'black'
				},
				{
					name: 'orange-A400',
					code: '#ff9100',
					text: 'black'
				},
				{
					name: 'orange-A700',
					code: '#ff6d00',
					text: 'black'
				},
			],
			[
				{
					name: 'deep-orange-50',
					code: '#fbe9e7',
					text: 'black'
				},
				{
					name: 'deep-orange-100',
					code: '#ffccbc',
					text: 'black'
				},
				{
					name: 'deep-orange-200',
					code: '#ffab91',
					text: 'black'
				},
				{
					name: 'deep-orange-300',
					code: '#ff8a65',
					text: 'black'
				},
				{
					name: 'deep-orange-400',
					code: '#ff7043',
					text: 'black'
				},
				{
					name: 'deep-orange-500',
					code: '#ff5722',
					text: 'black'
				},
				{
					name: 'deep-orange-600',
					code: '#f4511e',
					text: 'white'
				},
				{
					name: 'deep-orange-700',
					code: '#e64a19',
					text: 'white'
				},
				{
					name: 'deep-orange-800',
					code: '#d84315',
					text: 'white'
				},
				{
					name: 'deep-orange-900',
					code: '#bf360c',
					text: 'white'
				},
				{
					name: 'deep-orange-A100',
					code: '#ff9e80',
					text: 'black'
				},
				{
					name: 'deep-orange-A200',
					code: '#ff6e40',
					text: 'black'
				},
				{
					name: 'deep-orange-A400',
					code: '#ff3d00',
					text: 'white'
				},
				{
					name: 'deep-orange-A700',
					code: '#dd2c00',
					text: 'white'
				},
			],
			[
				{
					name: 'brown-50',
					code: '#efebe9',
					text: 'black'
				},
				{
					name: 'brown-100',
					code: '#d7ccc8',
					text: 'black'
				},
				{
					name: 'brown-200',
					code: '#bcaaa4',
					text: 'white'
				},
				{
					name: 'brown-300',
					code: '#a1887f',
					text: 'white'
				},
				{
					name: 'brown-400',
					code: '#8d6e63',
					text: 'white'
				},
				{
					name: 'brown-500',
					code: '#795548',
					text: 'white'
				},
				{
					name: 'brown-600',
					code: '#6d4c41',
					text: 'white'
				},
				{
					name: 'brown-700',
					code: '#5d4037',
					text: 'white'
				},
				{
					name: 'brown-800',
					code: '#4e342e',
					text: 'white'
				},
				{
					name: 'brown-900',
					code: '#3e2723',
					text: 'white'
				},
			],
			[
				{
					name: 'gray-50',
					code: '#fafafa',
					text: 'black'
				},
				{
					name: 'gray-100',
					code: '#f5f5f5',
					text: 'black'
				},
				{
					name: 'gray-200',
					code: '#eeeeee',
					text: 'black'
				},
				{
					name: 'gray-300',
					code: '#e0e0e0',
					text: 'black'
				},
				{
					name: 'gray-400',
					code: '#bdbdbd',
					text: 'black'
				},
				{
					name: 'gray-500',
					code: '#9e9e9e',
					text: 'black'
				},
				{
					name: 'gray-600',
					code: '#757575',
					text: 'white'
				},
				{
					name: 'gray-700',
					code: '#616161',
					text: 'white'
				},
				{
					name: 'gray-800',
					code: '#424242',
					text: 'white'
				},
				{
					name: 'gray-900',
					code: '#212121',
					text: 'white'
				},
			],
			[
				{
					name: 'blue-gray-50',
					code: '#eceff1',
					text: 'black'
				},
				{
					name: 'blue-gray-100',
					code: '#cfd8dc',
					text: 'black'
				},
				{
					name: 'blue-gray-200',
					code: '#b0bec5',
					text: 'black'
				},
				{
					name: 'blue-gray-300',
					code: '#90a4ae',
					text: 'black'
				},
				{
					name: 'blue-gray-400',
					code: '#78909c',
					text: 'white'
				},
				{
					name: 'blue-gray-500',
					code: '#607d8b',
					text: 'white'
				},
				{
					name: 'blue-gray-600',
					code: '#546e7a',
					text: 'white'
				},
				{
					name: 'blue-gray-700',
					code: '#455a64',
					text: 'white'
				},
				{
					name: 'blue-gray-800',
					code: '#37474f',
					text: 'white'
				},
				{
					name: 'blue-gray-900',
					code: '#263238',
					text: 'white'
				},
			]
		];
	}
}
