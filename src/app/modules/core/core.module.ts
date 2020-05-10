import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DurationPipe } from 'app/modules/core/duration-pipe/duration.pipe';
import { ConfirmModalComponent } from 'app/modules/core/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DurationPipe, ConfirmModalComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, DurationPipe, ConfirmModalComponent],
})
export class CoreModule {}
