import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DurationPipe } from 'app/modules/core/duration-pipe/duration.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DurationPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, DurationPipe],
})
export class CoreModule {}
