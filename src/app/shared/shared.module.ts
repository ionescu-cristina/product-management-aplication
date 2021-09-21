import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingComponent} from "./rating/rating.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe";

@NgModule({
  declarations: [
    RatingComponent,
    ConvertToSpacesPipe,
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
