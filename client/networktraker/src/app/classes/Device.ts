export class Device {
  // tslint:disable-next-line:variable-name
  IP: string;
  // tslint:disable-next-line:variable-name
  MAC: string;
  Name: string;


  // tslint:disable-next-line:variable-name
  constructor(IP: string, MAC: string, Name: string) {
    this.IP = IP;
    this.MAC = MAC;
    this.Name = Name;

  }
}
