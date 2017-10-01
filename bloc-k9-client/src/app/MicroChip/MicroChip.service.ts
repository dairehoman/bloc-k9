import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { MicroChip } from '../org.acme.block9';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MicroChipService {

	
		private NAMESPACE: string = 'MicroChip';
	



    constructor(private dataService: DataService<MicroChip>) {
    };

    public getAll(): Observable<MicroChip[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<MicroChip> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<MicroChip> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<MicroChip> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<MicroChip> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
