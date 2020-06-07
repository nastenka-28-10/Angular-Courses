import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DurationPipe } from 'app/pipes/duration-pipe/duration.pipe';
import { ConfirmModalComponent } from 'app/modules/core/confirm-modal/confirm-modal.component';
import { PageNotFoundComponent } from 'app/modules/core/page-not-found/page-not-found.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { LoadingSpinnerComponent } from 'app/modules/core/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    ConfirmModalComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    DurationPipe,
    ConfirmModalComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
  ],
})
export class CoreModule {}
