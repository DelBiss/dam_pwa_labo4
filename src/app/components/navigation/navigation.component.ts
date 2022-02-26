import { Component, OnInit } from '@angular/core';
import { AllMeasures } from 'src/app/services/convert-units/convert-units-module';
import { ConvertUnitsService } from 'src/app/services/convert-units/convert-units.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public measures:AllMeasures[]=[];
  constructor(private _converter:ConvertUnitsService) { }

  ngOnInit(): void {
    this.measures = this._converter.getMeasures()
    this.measures = [
      "mass",
      "length",
      "temperature",
      "angle",
      "pieces",
    ]
  }

}
