import { Injectable } from '@angular/core';
import { ObservableConverter } from './ObservableConverter';
import configMeasurements, { allMeasures, AllMeasures, Measure } from './convert-units-module';

@Injectable({
  providedIn: 'root'
})
export class ConvertUnitsService {

  constructor() { }

  getMeasures():AllMeasures[]{
    return configMeasurements(allMeasures)().measures()
  }

  getMeasureConverter(measure:AllMeasures){
    const myMeasure:Record<string,Measure<string,string>> = {}
    myMeasure[measure] = allMeasures[measure]
    return new ObservableConverter(configMeasurements(myMeasure),measure)
  }
}
