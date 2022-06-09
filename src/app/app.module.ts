import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { PeopleComponent } from './people/people.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PeopleEditComponent } from './people/people-edit/people-edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //Material
    NoopAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,

    RouterModule.forRoot([
      {path: 'people', component: PeopleComponent},
      {path: '', redirectTo: '/people', pathMatch: 'full' },
      {path: 'people/:id/edit', component: PeopleEditComponent, pathMatch: 'full'}
    ]),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
