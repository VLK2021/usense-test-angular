import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  strength: string = 'empty';

  constructor() { }

  ngOnInit(): void {
  }

}
