import { Component, OnInit } from '@angular/core';
import {LoadingSpinnerServiceService} from 'app/modules/core/loading-spinner-service.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading = false;
  constructor(private loadingSpinnerService: LoadingSpinnerServiceService) {}

  ngOnInit(): void {
    this.loadingSpinnerService.status.subscribe((value: boolean) => {
      this.isLoading = value;
    });
  }
}
