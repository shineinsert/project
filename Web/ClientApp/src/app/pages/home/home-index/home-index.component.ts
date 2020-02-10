import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject, from } from 'rxjs';

import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Swal from 'sweetalert2';
 @Component({
  selector: 'kt-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
	 private _unsubscribeAll: Subject<any>;
	 customers: any;
	 constructor() {
		 this._unsubscribeAll = new Subject();
	 }

	 ngOnInit() {
	
	 }



}
