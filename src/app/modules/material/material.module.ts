import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule,  MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule    
  ],
  exports : [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
