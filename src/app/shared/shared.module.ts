import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from "./rating/rating.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    RatingComponent,
    ConvertToSpacesPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
  ]
})
export class SharedModule { }
