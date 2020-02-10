import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
export class UserDetailModel {
	cus_Id: number;
	cus_name_cp: string;
	cus_address: string;
	cus_tel_cp: string;
	cus_prename_ct: string;
	cus_name_ct: string;
	cus_tel_ct: string;
	cus_tax: string;
	userName: string;
	password: string;
	cus_status: number;
	constructor(user?) {
		user = user || {};
		this.cus_Id = user.cus_Id || 0;
		this.cus_name_cp = user.cus_name_cp || '';
		this.cus_address = user.cus_address ||'';
		this.cus_tel_cp = user.cus_tel_cp || '';
		this.cus_prename_ct = user.cus_prename_ct || '';
		this.cus_name_ct = user.cus_name_ct || '';
		this.cus_tel_ct = user.cus_tel_ct || '';
		this.cus_tax = user.cus_tax || '';
		this.userName = user.userName || '';
		this.password = user.password || '';
		this.cus_status = user.cus_status || null;
	}
}


@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.scss']
})

export class CustomerDetailComponent implements OnInit, OnDestroy{

 
	userDetail: UserDetailModel;
	pageType: string;
	userDetailForm: FormGroup;
	userInRoles: any[];
	isResetPassword: boolean;
	private _unsubscribeAll: Subject<any>;
	constructor(
		private _formBuilder: FormBuilder,
		private router: Router)
	{
		this._unsubscribeAll = new Subject();

		this.userDetail = new UserDetailModel();
	}
	ngOnInit(): void {

		this.userDetailForm = this.createUserForm();

	}
	createUserForm(): FormGroup {

		return this._formBuilder.group({
			cus_Id: [this.userDetail.cus_Id],
			cus_name_cp: [this.userDetail.cus_name_cp],
			cus_address: [this.userDetail.cus_address],
			cus_tel_cp: [this.userDetail.cus_tel_cp],
			cus_prename_ct: [this.userDetail.cus_prename_ct],
			cus_name_ct: [this.userDetail.cus_name_ct],
			cus_tel_ct: [this.userDetail.cus_tel_ct],
			cus_tax: [this.userDetail.cus_tax],
			userName: [this.userDetail.userName, [Validators.required, Validators.minLength(4)]],
			password: [{ value: this.userDetail.password, disabled: !this.isResetPassword }, [Validators.required, Validators.minLength(4)]],
			cus_status: [this.userDetail.cus_status, [Validators.required]],
		
		});
	}


	
	ngOnDestroy(): void {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
	}
}
