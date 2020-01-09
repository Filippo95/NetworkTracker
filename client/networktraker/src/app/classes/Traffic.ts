export class Traffic {
  // tslint:disable-next-line:variable-name
  original_ip: string;
  // tslint:disable-next-line:variable-name
  destination_ip: string;
  host: string;
  timestamp: string;

  // tslint:disable-next-line:variable-name
  constructor(original_ip: string, destination_ip: string, host: string, timestamp: string) {
  this.original_ip = original_ip;
  this.destination_ip = destination_ip;
  this.host = host;
  this.timestamp = timestamp;

}
}
