import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import { ItemService } from "../../item.service";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [
    trigger('listAnimation', [
      state('inactive', style({ transform: 'translateX(0) scale(1)', opacity:1 })),
      state('active', style({ transform: 'translateX(0) scale(1.05)', opacity:1 })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => *', animate(500, keyframes([
        style({
          transform: 'translateX(-100%)',
          opacity: '0',
        }),
        style({
          transform: 'translateX(-50%)',
          opacity: '0.2',
        }),
        style({
          transform: 'translateX(10%)',
          opacity: '1',
        }),
        style({
          transform: 'translateX(5%)',
          opacity: '1',
        }),
        style({
          transform: 'translateX(0)',
          opacity: '1',
        })
      ]))),
      transition(':leave', [animate('0.2s', style({opacity: 0, transform: 'translateX(100%)'}))])
    ]
  )]
})

export class ItemComponent implements OnInit {
  @Input() item;
  @Input() index;

  listState = 'inactive';

  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }

  hovering (){
    if(this.listState == 'inactive'){
      this.listState = 'active';
    }else {
      this.listState = 'inactive';
    }
  }

  onRemove(){
    this.itemService.removeItem(this.index);
  }
}
