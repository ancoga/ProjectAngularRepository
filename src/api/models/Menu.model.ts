import { Submenu } from './Submenu.model';

export interface Menu {
	name: string;
	routerLink?: string;
	icon: string;
	active: boolean;
	submenu?: Submenu[];
}
