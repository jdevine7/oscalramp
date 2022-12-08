import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../models/oscal-models';

@Component({
  selector: 'app-control-group-list',
  templateUrl: './control-group-list.component.html',
  styleUrls: ['./control-group-list.component.scss']
})
export class ControlGroupListComponent implements OnInit {
  @Input() groups!: Group[]
  constructor() { }

  ngOnInit(): void {
  }

}
