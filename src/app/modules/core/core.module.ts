import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DurationPipe } from 'app/modules/core/duration-pipe/duration.pipe';
import { ConfirmModalComponent } from 'app/modules/core/confirm-modal/confirm-modal.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DurationPipe, ConfirmModalComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, DurationPipe, ConfirmModalComponent],
})
export class CoreModule {}
