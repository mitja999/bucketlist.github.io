import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.scss']
})
export class BucketItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    debugger;
    this.route.params.subscribe(params=> console.log(params));
   }

  ngOnInit() {
  }

}
