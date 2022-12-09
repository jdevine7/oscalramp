import { Component, Input } from '@angular/core';
import { Group } from '../models/oscal-models';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-control-group-list',
  templateUrl: './control-group-list.component.html',
  styleUrls: ['./control-group-list.component.scss']
})
export class ControlGroupListComponent {
  faChevronRight = faChevronRight 
  @Input() groups!: Group[]
}
