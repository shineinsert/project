import { Component, OnInit, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

const I18N_VALUES = {
	'th': {
		weekdays: ['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
		months: ['ม.ค', 'ก.พ', 'มี.ค', 'เม.ย', 'พ.ค', 'มิ.ย', 'ก.ค', 'ส.ค', 'ก.ย', 'ต.ค', 'พ.ย', 'ธ.ค'],
	}
};

@Injectable()
export class I18n {
	language = 'th';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

	constructor(private _i18n: I18n) {
		super();
	}

	getWeekdayShortName(weekday: number): string {
		return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES[this._i18n.language].months[month - 1];
	}


	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}

	getYearNumerals(year: number): string {
		return (year + 543).toString();
	}

	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}

@Component({
	selector: 'kt-date-picker-thai',
	templateUrl: './date-picker-thai.component.html',
	styleUrls: ['./date-picker-thai.component.scss'],
	providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DatePickerThaiComponent implements OnInit {
	@Input()
	set mode(mode: string) {
		if (mode == 'view') {
			this.isDisabled = true;
		}
		else {
			this.isDisabled = false;
		}
	};

	@Input()
	set datevalue(datevalue: string) {
		this.model = null;
		this.model_th = null;

		if (datevalue) {
			this.model = new Date(datevalue);
			this.model_th = this.THFormat(this.model);
		}
		else {
			if (this.mode == 'add') {
				console.log(this.mode);
				this.model = null;
				this.model_th = null;
			}
		}
	};

	@Output() changeEvent = new EventEmitter();

	model: Date;
	model_th: string;

	isDisabled: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	getValue() {
		this.model_th = this.THFormat(this.model);
		this.changeEvent.emit(this.model);
	}

	THFormat(d: Date) {
		let result: string = (d.getDate()).toString() + "-" + (d.getMonth() + 1).toString() + "-" + (d.getFullYear() + 543).toString();
		return result;
	}

}
