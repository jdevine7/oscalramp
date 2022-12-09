import { Component, Input } from '@angular/core';
import { Group } from '../models/oscal-models';

@Component({
  selector: 'app-control-group-list',
  templateUrl: './control-group-list.component.html',
  styleUrls: ['./control-group-list.component.scss']
})
export class ControlGroupListComponent {
  @Input() groups!: Group[]
}
