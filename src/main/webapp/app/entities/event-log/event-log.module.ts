import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { EventLogComponent } from './list/event-log.component';
import { EventLogDetailComponent } from './detail/event-log-detail.component';
import { EventLogUpdateComponent } from './update/event-log-update.component';
import { EventLogDeleteDialogComponent } from './delete/event-log-delete-dialog.component';
import { EventLogRoutingModule } from './route/event-log-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  imports: [SharedModule, EventLogRoutingModule, MatDatepickerModule, MatFormFieldModule],
  declarations: [EventLogComponent, EventLogDetailComponent, EventLogUpdateComponent, EventLogDeleteDialogComponent],
  entryComponents: [EventLogDeleteDialogComponent],
})
export class EventLogModule {}
