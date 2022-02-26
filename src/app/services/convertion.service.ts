import { Injectable } from '@angular/core';
import { volume,mass, temperature,illuminance, length, pieces, power, speed, time,  Measure} from './convert-units/convert-units-module';
import { ConverterSystem } from './myConverter';

@Injectable({
  providedIn: 'root'
})
export class ConvertionService {
  private _convert;
  constructor(/* private _convert:convert.Convert */) {
    const mMeasures:Record<string,Measure<string,string>>= {
      mass,
      length,
      temperature,
      volume,
      speed,
      illuminance,
      pieces,
      power,
      time
    }
    this._convert = new ConverterSystem(mMeasures)

   }

   getMeasures(){
     return this._convert.getMeasure();
   }

   getList(measure:string){
     return this._convert.getMeasureConverter(measure);
   }
  
   getConverter(measure:any){
     const converter = {};
   }
}
