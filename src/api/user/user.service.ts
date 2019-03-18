// CORE
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

// INTERFACES
import { User } from './models/user';

@Injectable()
export class UserService {
	/**
	 * @constructor
	 */
	constructor() { }
	/**
	 * @description Get user data from services
	 * @return {Observable<User>}
	 */
	getUserDatas(): Observable<User> {
		const user: User = {
			img: './assets/img/user.png',
			nick: 'Dario',
			email: 'dario@weblabstudio.net'
		};
		return of(user);
	}
}
