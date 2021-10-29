import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges() {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating}`);
  }
}
