import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Asegúrate de agregar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
