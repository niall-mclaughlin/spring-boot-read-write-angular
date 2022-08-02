import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contractor-order',
  templateUrl: './contractor-order.html',
  styleUrls: ['./contractor-order.css']
})

export class PersonComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder) {}

  load(): boolean {
    return true
  }

}

