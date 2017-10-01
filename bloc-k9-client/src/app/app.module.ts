import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { MicroChipComponent } from './MicroChip/MicroChip.component';
import { AnimalComponent } from './Animal/Animal.component';
import { VetComponent } from './Vet/Vet.component';
import { PersonComponent } from './Person/Person.component';
import { RegulatorComponent } from './Regulator/Regulator.component';
import { DatabaseProviderComponent } from './DatabaseProvider/DatabaseProvider.component';


@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    MicroChipComponent,
		
    AnimalComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
