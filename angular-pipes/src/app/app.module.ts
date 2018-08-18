import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; //<- ya lo tienes, aunque con el auto import no creo que necesites estar tan pendiente
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './pipes/custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    CustomPipesComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 





