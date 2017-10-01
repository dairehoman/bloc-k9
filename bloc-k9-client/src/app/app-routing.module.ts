import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';
import { MicroChipComponent } from './MicroChip/MicroChip.component';
import { AnimalComponent } from './Animal/Animal.component';
import { VetComponent } from './Vet/Vet.component';
import { PersonComponent } from './Person/Person.component';
import { DatabaseProviderComponent } from './DatabaseProvider/DatabaseProvider.component';
import { RegulatorComponent } from './Regulator/Regulator.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'MicroChip', component: MicroChipComponent},
    { path: 'Animal', component: AnimalComponent},
    { path: 'Vet', component: VetComponent},
		{ path: 'DatabaseProvider', component: DatabaseProviderComponent},
		{ path: 'Person', component: PersonComponent},
		{ path: 'Regulator', component: RegulatorComponent},
    
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
