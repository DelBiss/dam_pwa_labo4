import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConvertionService } from '../convertion.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-convertion',
  templateUrl: './convertion.component.html',
  styleUrls: ['./convertion.component.css']
})
export class ConvertionComponent implements OnInit, OnDestroy {
  public view:string = "poids";
  public left:string = "";
  public right:string = "";
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
            }
        }
    );
  }

  onChangeLeft(newValue: string) {
    console.log(newValue);
    this.right = this._convertion.test(parseFloat(newValue)).toString()
  }
  onChangeRight(newValue: any) {
    console.log(newValue);
    this.left = newValue
  }
}
