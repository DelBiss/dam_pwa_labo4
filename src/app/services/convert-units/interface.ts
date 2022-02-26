import { BehaviorSubject, Observer, Subscription } from "rxjs";
import { AccelerationSystems, AccelerationUnits, allMeasures, AllMeasures, AllMeasuresSystems, AllMeasuresUnits, Measure, UnitDescription } from "./convert-units-module";


export interface UnitConverter {
    description:UnitDescription
    next:(change:number)=>void
    subscribe:(observer: Partial<Observer<number>>)=>Subscription
}

export interface UnitObserver {
    obs:BehaviorSubject<number>
    unit:UnitConverter
}


