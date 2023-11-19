import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  passwordLength: number = 8;
  generatedPassword: string = '';
  copiedMessage: string = '';

  generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * characters.length);
      password += characters.charAt(index);
    }
    this.generatedPassword = password;
  }

  copyToClipboard() {
    const textarea = document.createElement('textarea');
    textarea.value = this.generatedPassword;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.copiedMessage = 'Password copied to clipboard!';
    setTimeout(() => {
      this.copiedMessage = '';
    }, 3000);
  }
}
