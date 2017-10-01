import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Regulator } from '../org.acme.block9';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class RegulatorService {

	
		private NAMESPACE: string = 'Regulator';
	



    constructor(private dataService: DataService<Regulator>) {
    };

    public getAll(): Observable<Regulator[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Regulator> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Regulator> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Regulator> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Regulator> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
