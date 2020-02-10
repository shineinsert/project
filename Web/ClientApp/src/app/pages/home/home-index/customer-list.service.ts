import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpParams, HttpClient } from '@angular/common/http';
import { HttpQueryStringEncoder } from 'shared/http-querystring-encoder';


@Injectable()
export class CustomerListService implements Resolve<any>{
	onListChanged: BehaviorSubject<any>;
	onSelectedChanged: BehaviorSubject<any>;

	users: any[];
	total: number;
	private baseUrl: string;
	constructor(private _httpClient: HttpClient) {
		this.baseUrl = "../";
		this.onListChanged = new BehaviorSubject([]);
		this.onSelectedChanged = new BehaviorSubject([]);
	}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
		return new Promise((resolve, reject) => {
			Promise.all([
				//this.getUsers({})
			]).then(
				() => {
					resolve();
				},
				reject
			);
		});
	}
	getUsers(_params?: any): Promise<any> {
		let params = new HttpParams({ encoder: new HttpQueryStringEncoder() });
		params = params.set('Sorting', _params.sorting || 'name+');
		params = params.set('SearchText', _params.searchText || '');
		params = params.set('Page', _params.page || 1);
		params = params.set('ItemPerPage', _params.itemPerPage || 25);

		return new Promise((resolve, reject) => {
			this._httpClient.get(`${this.baseUrl}api/customers`, { params })
				.subscribe((response: any) => {
					this.users = response.results;
					this.total = response.total;
					this.onListChanged.next(this.users);
					resolve(response);

				}, reject);
		});
	}

	deleteUser(user): Promise<any> {
		return new Promise((resolve, reject) => {
			this._httpClient.delete(`${this.baseUrl}api/customer/${user.cus_Id}`)
				.subscribe((response: any) => {
					const index = this.users.indexOf(user);
					this.users.splice(index, 1);
					this.onListChanged.next(this.users);
					resolve(response);

				}, reject);
		});
	}
}
