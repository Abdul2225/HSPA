import { Component } from "@angular/core";

@Component({
selector:'app-poperty-card',
templateUrl:'property-card.component.html',
styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
property:any = {
    'id':1,
    'name':'Salam House',
    'type':'house',
    'price':30000,
}
}