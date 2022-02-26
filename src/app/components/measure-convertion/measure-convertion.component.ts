import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject} from 'rxjs';
import { UnitConverter } from '../../services/convert-units/interface';
import { ConvertUnitsService } from 'src/app/services/convert-units/convert-units.service';
import { AllMeasures } from 'src/app/services/convert-units/convert-units-module';

@Component({
  selector: 'measure-convertion',
  templateUrl: './measure-convertion.component.html',
  styleUrls: ['./measure-convertion.component.css']
})
export class MeasureConvertionComponent implements OnInit, OnDestroy {
  public view:AllMeasures = "mass";
  public measureDetails:UnitConverter[] = [];
 
  ClearEventsSubject: Subject<void> = new Subject<void>();

  
  constructor(
    private  _convertion:ConvertUnitsService,
    private route: ActivatedRoute) { }
  
  ngOnDestroy(): void {
    console.log("Component destroyed");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
        {
            next: params=>{
                this.view=(params.get('measure-type')??"") as AllMeasures;
                this.measureDetails = this._convertion.getMeasureConverter(this.view).getUnits()
            }
        }
    );
  }

  emitClearEvent() {
    this.ClearEventsSubject.next();
  }

}
