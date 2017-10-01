import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../org.acme.block9';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DatabaseProviderService {

	
		private NAMESPACE: string = 'DatabaseProvider';
	



    constructor(private dataService: DataService<DatabaseProvider>) {
    };

    public getAll(): Observable<DatabaseProvider[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<DatabaseProvider> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<DatabaseProvider> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<DatabaseProvider> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<DatabaseProvider> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
