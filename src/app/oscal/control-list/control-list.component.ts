import { Component, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Control } from '../models/oscal-models';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.scss']
})
export class ControlListComponent {
  faChevronRight = faChevronRight 
  @Input() controls!: Control[]
}
