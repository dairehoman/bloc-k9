import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegulatorService } from './Regulator.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Regulator',
	templateUrl: './Regulator.component.html',
	styleUrls: ['./Regulator.component.css'],
  providers: [RegulatorService]
})
export class RegulatorComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          RegulatorID = new FormControl("", Validators.required);
        
  


  constructor(private serviceRegulator:RegulatorService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          RegulatorID:this.RegulatorID
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceRegulator.getAll()
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
