import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import {ProjectService} from './project.service'; 
import {Observable} from 'rxjs/Observable'; 

@Component({
    templateUrl: 'project.component.html', 
    styleUrls: ['project.component.scss'], 
    selector:'project-view'
})
export class ProjectViewComponent implements OnInit {
    private paramSubscription: any; 
    private id: string; 
    private project: any = null; 
    
    constructor(private route: ActivatedRoute, private projects: ProjectService) { }

    openLink(link){
        window.open(link.url, '_blank'); 
    }

    ngOnInit() { 
        this.paramSubscription = this.route.params.subscribe(params => {
            let id  = params['id']; 
            
            this.projects.getProject(id)
                         .subscribe(data =>  this.project = data);
        }); 

    }
}