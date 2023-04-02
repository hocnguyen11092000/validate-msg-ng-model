import { ParsedProperty } from '@angular/compiler';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-validatte-message',
  templateUrl: './validatte-message.component.html',
  styleUrls: ['./validatte-message.component.scss'],
})
export class ValidatteMessageComponent implements OnInit, OnChanges {
  @Input() error: any;
  @Input() condition: any;
  msg: string = '';
  changesError: any = {};
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    if (change['error'] && change['error'].currentValue) {
      const changeError: any = change['error'].currentValue;
      this.changesError = changeError;
      let check = false;
      this.condition.forEach((item: any, index: number) => {
        if (Object.keys(item).includes(Object.keys(changeError)[0]) && !check) {
          this.showErrorMsg(Object.keys(item)[0] || '');
          check = true;
        }
      });
    } else {
      this.msg = '';
    }
  }

  showErrorMsg(errType: string) {
    if (errType) {
      switch (errType) {
        case 'minlength':
          const length =
            (this.changesError['minlength'] &&
              this.changesError['minlength']['requiredLength']) ||
            1;
          this.msg = `Trường này nhỏ nhất ${length} kí tự`;
          break;
        case 'email':
          this.msg = 'Vui lòng nhập dúng định dạng email';
          break;
        case 'required':
          this.msg = 'Trường này không đc bỏ trống';
          break;
        default:
          this.msg = '';
      }
    }
  }
}
