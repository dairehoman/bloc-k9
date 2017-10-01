import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Vet } from '../org.acme.block9';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class VetService {

	
		private NAMESPACE: string = 'Vet';
	
    constructor(private dataService: DataService<Vet>) {
    };

    public getAll(): Observable<Vet[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }
}
