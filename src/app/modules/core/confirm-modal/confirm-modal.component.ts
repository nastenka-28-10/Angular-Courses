import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  @Input() modalHeader = '';
  @Input() modalQuestion: string;
  @Input() confirmMessage = 'Yes';
  @Input() cancelMessage = 'No';
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onConfirm() {
    this.confirmed.emit();
    this.closed.emit();
  }

  onCancel() {
    this.closed.emit();
  }
}
