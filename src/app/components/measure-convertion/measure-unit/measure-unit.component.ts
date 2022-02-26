import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UnitConverter } from '../../../services/convert-units/interface';

@Component({
  selector: 'measure-unit',
  templateUrl: './measure-unit.component.html',
  styleUrls: ['./measure-unit.component.css']
})
export class MeasureUnitComponent implements OnInit, OnDestroy {
  private ClearEventsSubscription: Subscription | undefined;
  private NextValueSubscription: Subscription | undefined;
  @Input() public detail:UnitConverter | undefined;
  @Input() clear: Observable<void>|undefined;
  public value:string = "";
  public isTooSmall:boolean = false;
  constructor() { }

  

  ngOnInit(): void {
    this.detail?.subscribe(
      {
        next: newValue=>{
          const precision = 6
          const valueRounded = Math.round(newValue*(10**precision))/(10**precision)
          let outPut = valueRounded.toString();
          let isTooSmall = false;
          if (valueRounded == 0){
            isTooSmall = (newValue == 0)?false:true
            outPut = ""
          }
          this.isTooSmall = isTooSmall
          this.value = outPut
        }
      }
    )
    this.ClearEventsSubscription = this.clear?.subscribe(() =>this.value="");
  }
  
  ngOnDestroy(): void {
    this.NextValueSubscription?.unsubscribe();
    this.ClearEventsSubscription?.unsubscribe();
  }


  onChange(newValue: string){
    if(!isNaN(parseFloat(newValue))){
      this.detail?.next(parseFloat(newValue))
    }
  }
}
