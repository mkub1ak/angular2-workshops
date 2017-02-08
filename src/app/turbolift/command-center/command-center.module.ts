import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommandCenterComponent } from './command-center.component';
import { YesNoPipe } from './yes-no/yes-no.pipe';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CommandCenterComponent, YesNoPipe],
  exports: [CommandCenterComponent]
})
export class CommandCenterModule { }
