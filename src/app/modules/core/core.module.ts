import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DurationPipe } from 'app/pipes/duration-pipe/duration.pipe';
import { ConfirmModalComponent } from 'app/modules/core/confirm-modal/confirm-modal.component';
import { PageNotFoundComponent } from 'app/modules/core/page-not-found/page-not-found.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    ConfirmModalComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    ConfirmModalComponent,
    PageNotFoundComponent,
  ],
})
export class CoreModule {}
