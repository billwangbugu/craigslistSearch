import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class MaterialModule{}
