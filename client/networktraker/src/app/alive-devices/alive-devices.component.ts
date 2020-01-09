import { Component, OnInit } from '@angular/core';
import {AliveDeviceService } from '../services/alive-device.service';
import {Device} from '../classes/Device';

@Component({
  selector: 'app-alive-devices',
  templateUrl: './alive-devices.component.html',
  styleUrls: ['./alive-devices.component.css']
})
export class AliveDevicesComponent implements OnInit {

  constructor(public AliveDeviceService: AliveDeviceService) { }
  alived: Device[];
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.loadAlive();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  loadAlive() {
    this.AliveDeviceService.getAliveDevice()
      .subscribe(devs => (this.alived = devs));
  }
}
