import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConvertionService } from '../convertion.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { UnitConverter } from '../myConverter';

@Component({
  selector: 'app-convertion',
  templateUrl: './convertion.component.html',
  styleUrls: ['./convertion.component.css']
})
export class ConvertionComponent implements OnInit, OnDestroy {
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
            next: x=>{
                console.log(x.get('view'));
                this.view=x.get('view')??"";
                this.measureDetails = this._convertion.getList(this.view).getUnits()
            }
        }
    );
  }

  emitClearEvent() {
    this.ClearEventsSubject.next();
  }

}
