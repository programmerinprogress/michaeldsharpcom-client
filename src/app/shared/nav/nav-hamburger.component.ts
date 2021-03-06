import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router'; 
import {Output, EventEmitter} from '@angular/core'; 

@Component({
    selector: 'nav-hamburger',
    templateUrl: 'nav-hamburger.component.html', 
    styleUrls: ['nav-hamburger.component.scss']
})
export class NavHamburgerComponent implements OnInit {
    constructor() { }

    @Output() onSelection = new EventEmitter(); 

    onRouteSelection(){
        this.onSelection.emit(null);
    }

    ngOnInit() { }
}