import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatabaseProviderService } from './DatabaseProvider.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-DatabaseProvider',
	templateUrl: './DatabaseProvider.component.html',
	styleUrls: ['./DatabaseProvider.component.css'],
  providers: [DatabaseProviderService]
})
export class DatabaseProviderComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          DatabaseProviderID = new FormControl("", Validators.required);
        
  


  constructor(private serviceDatabaseProvider:DatabaseProviderService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          DatabaseProviderID:this.DatabaseProviderID
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceDatabaseProvider.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }


}
