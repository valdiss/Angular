import { Component } from '@angular/core';

import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise<any>((resolve, reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000);
  });
  
  filteredStatus='';

  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(2017, 0, 31)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2017, 0, 31)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2017, 0, 31)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(2017, 0, 31)
    }
  ];
  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onStatusButtonClick(status:string){
    this.filteredStatus = status;
  }
}
