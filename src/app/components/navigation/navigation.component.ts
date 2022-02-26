import { Component, OnInit } from '@angular/core';
import { ConvertionService } from '../../services/convertion.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public measures:string[]=[];
  constructor(private _converter:ConvertionService) { }

  ngOnInit(): void {
    this.measures = this._converter.getMeasures()
  }

}
