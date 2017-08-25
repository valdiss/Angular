export class Server {
  public instanceType: string;
  public name: string;
  public status: string;
  public started: Date;

  constructor(instanceType: string, name: string, status: string, started: Date){
    this.instanceType = instanceType;
    this.name = name;
    this.status = status;
    this.started = started;
  }
}
