import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message: Message = new Message;
  constructor(){ }

  show(msg: Message ){   
    this.message = msg;
    setTimeout(()=>{
      this.message = new Message;
    }, 2000)
  }
}

