import {Component, Input, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})

export class PasswordStrengthComponent implements OnInit {
  @Input() currentPassword: string = '';

  passwordName: string = 'empty';
  passwordColorFirst: string = 'gray';
  passwordColorSecond: string = 'gray';
  passwordColorThird: string = 'gray';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPassword'] && changes['currentPassword'].currentValue.length > 0) {

      if (changes['currentPassword'].currentValue.length >= 8) {
        const hasEasy = /^[a-zA-Z0-9!@#$%^&*()]+$/.test(changes['currentPassword'].currentValue);
        const hasMedium = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])|(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[0-9])(?=.*[!@#$%^&*()])/.test(changes['currentPassword'].currentValue);
        const hasStrong = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*().,])(?=.*[0-9])/.test(changes['currentPassword'].currentValue);

        if (hasEasy) {
          this.passwordName = 'Easy';
          this.passwordColorFirst = 'red';
          this.passwordColorSecond = 'gray';
          this.passwordColorThird = 'gray';
        }
        if (hasMedium) {
          this.passwordName = 'Medium';
          this.passwordColorFirst = 'yellow';
          this.passwordColorSecond = 'yellow';
          this.passwordColorThird = 'gray';
        }
        if (hasStrong) {
          this.passwordName = 'Strong';
          this.passwordColorFirst = 'green';
          this.passwordColorSecond = 'green';
          this.passwordColorThird = 'green';
        }

      } else {
        this.passwordName = 'Empty';
        this.passwordColorFirst = 'gray';
        this.passwordColorSecond = 'gray';
        this.passwordColorThird = 'gray';
      }
    }
  }


}
