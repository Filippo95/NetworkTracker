import { Component, OnInit } from '@angular/core';
import {TrafficServiceService} from '../services/traffic-service.service';
import {Traffic} from '../classes/Traffic';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {

  constructor(public TrafficService: TrafficServiceService ) { }
  calls: Traffic[];
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.loadTraffic();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  loadTraffic() {
    this.TrafficService.getTraffic()
      .subscribe(calls => (this.calls = calls));
  }
}

