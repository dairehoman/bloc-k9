import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VetService } from './Vet.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Vet',
	templateUrl: './Vet.component.html',
	styleUrls: ['./Vet.component.css'],
  providers: [VetService]
})
export class VetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;
      
          VetID = new FormControl("", Validators.required);
        
  constructor(private serviceVet:VetService, fb: FormBuilder) {
    this.myForm = fb.group({
    
          VetID:this.VetID
      
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceVet.getAll()
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
