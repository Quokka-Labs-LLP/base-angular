import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports:[
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class MaterialModuleModule { }
