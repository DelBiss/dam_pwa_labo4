import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConvertionService } from '../../services/convertion.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { UnitConverter } from '../../services/myConverter';

@Component({
  selector: 'measure-convertion',
  templateUrl: './measure-convertion.component.html',
  styleUrls: ['./measure-convertion.component.css']
})
export class MeasureConvertionComponent implements OnInit, OnDestroy {
  public view:string = "poids";
  public measureDetails:UnitConverter[] = [];
 
  ClearEventsSubject: Subject<void> = new Subject<void>();

  
  constructor(
    private  _convertion:ConvertionService,
    private route: ActivatedRoute) { }
  
  ngOnDestroy(): void {
    console.log("Component destroyed");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
        {
            next: params=>{
                this.view=params.get('measure-type')??"";
                this.measureDetails = this._convertion.getList(this.view).getUnits()
            }
        }
    );
  }

  emitClearEvent() {
    this.ClearEventsSubject.next();
  }

}
