import { BehaviorSubject, Observer, Subscription } from "rxjs";
import { Converter,  UnitDescription } from "./convert-units-module"
import { UnitConverter, UnitObserver } from "./interface";



export class ObservableConverter<
                TMeasures extends string,
                TSystems extends string,
                TUnits extends string
            >
{
    private _measure:TMeasures;
    private _converter:(value?: number) => Converter<TMeasures, TSystems, TUnits>;
    private _unitConverters:UnitObserver[];
    constructor(
        converter:(value?: number) => Converter<TMeasures, TSystems, TUnits>,
        measure:TMeasures
    ){
        this._converter = converter;
        this._measure = measure;
        this._unitConverters = this.generateConverter();
    }

    private convert(newValue:number,from:UnitObserver, to:UnitObserver):number{
        return this ._converter(newValue)
                    .from(from.unit.description.abbr as TUnits)
                    .to(to.unit.description.abbr as TUnits)
    }

    private generateConverter():UnitObserver[] {
        //Get the list of all unit in for this
        const descriptions:UnitDescription[] =this._converter().list(this._measure)
        const converters = descriptions.map(
            (d:UnitDescription)=>
            {
                const theObs = new BehaviorSubject<number>(0)
                const theUnitObserver:UnitObserver = {
                    obs: theObs,
                    unit: {
                        description:d,
                        next: (change:number)=>{},
                        subscribe: (observer:Partial<Observer<number>>) =>{
                            return theObs.subscribe(observer)
                        }
                    }
                }

                theUnitObserver.unit.next = (change:number)=> {
                    for (const aUnitConverter of this._unitConverters) {
                        if(aUnitConverter !== theUnitObserver){
                            aUnitConverter.obs.next(this.convert(change,theUnitObserver,aUnitConverter))
                        }
                    }
                }

                return theUnitObserver
            }
            
        )
        return converters
    }
    getUnits():UnitConverter[]{
        return this._unitConverters.map(x => x.unit);
    }
}
