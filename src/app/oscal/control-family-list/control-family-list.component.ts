import { Component, Input } from '@angular/core';
import { Group } from '../models/oscal-models';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-control-family-list',
  templateUrl: './control-family-list.component.html',
  styleUrls: ['./control-family-list.component.scss']
})
export class ControlFamilyListComponent {
  faChevronRight = faChevronRight 
  @Input() groups!: Group[]
}
