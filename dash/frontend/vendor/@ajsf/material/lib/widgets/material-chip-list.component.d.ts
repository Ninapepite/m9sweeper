import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from 'vendor/@ajsf/core';
import * as i0 from "@angular/core";
export declare class MaterialChipListComponent implements OnInit {
    private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: any;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialChipListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialChipListComponent, "material-chip-list-widget", never, { "layoutNode": "layoutNode"; "layoutIndex": "layoutIndex"; "dataIndex": "dataIndex"; }, {}, never, never, false>;
}
