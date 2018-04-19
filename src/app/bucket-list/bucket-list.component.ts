import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {

  private newBucketList=false;

  constructor(private router: Router) {
    
    this.router.events.subscribe((event:NavigationEnd )=> {
      if(event instanceof NavigationEnd ){
        this.newBucketList=event.urlAfterRedirects.indexOf('new')!==-1;
      }
    });
    
  }
   
  ngOnInit() {
  }

}
