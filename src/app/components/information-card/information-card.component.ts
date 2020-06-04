import { Component, OnInit, Input } from '@angular/core';
import { IWorkout } from 'src/app/interfaces/workout.interface';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent implements OnInit {
  @Input() data: any;
  @Input() action: () => void;

  constructor() { }

  ngOnInit(): void {
    console.log('data', this.data);
  }

}
