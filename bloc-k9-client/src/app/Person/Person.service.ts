import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../org.acme.block9';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PersonService {

	
		private NAMESPACE: string = 'Person';
	



    constructor(private dataService: DataService<Person>) {
    };

    public getAll(): Observable<Person[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Person> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Person> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Person> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Person> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
