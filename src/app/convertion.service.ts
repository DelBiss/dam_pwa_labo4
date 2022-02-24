import { Injectable } from '@angular/core';
import configMeasurements, { volume,mass, temperature,illuminance, length, pieces, power, speed, time, AllMeasures, allMeasures} from './convert-units';

@Injectable({
  providedIn: 'root'
})
export class ConvertionService {
  private _convert;
  constructor(/* private _convert:convert.Convert */) {
    const mMeasures = {
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

    // @ts-ignore
    this._convert = configMeasurements(mMeasures)
    // const myUnit = myConverter().measures()
    // console.log("service constructor",myConverter().list(myUnit[0]))
  //   const differentConvert = configMeasurements(
  //     );
   }

   getMeasures(){
     return this._convert().measures()
   }
  /**
   * test
   */
  test(value:number):number {
    return value * 10
  }

  getService(view:string){
    console.log("Asked for a nsew sesvice:", view)
  }
}
