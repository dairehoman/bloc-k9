import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PersonService } from './Person.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Person',
	templateUrl: './Person.component.html',
	styleUrls: ['./Person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          PPSN = new FormControl("", Validators.required);
        
  
      
          Person = new FormControl("", Validators.required);
        
  
      
          microChip = new FormControl("", Validators.required);
        
  
      
          breeder = new FormControl("", Validators.required);
        

  constructor(private servicePerson:PersonService, fb: FormBuilder) {
    this.myForm = fb.group({
        PPSN:this.PPSN,
        Person:this.Person,   
        microChip:this.microChip,
        breeder:this.breeder

    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePerson.getAll()
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

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.block9.Person",
      
        
          "PersonId":this.PersonId.value,
        
      
        
          "Person":this.Person.value,
        
      
        
          "microChip":this.microChip.value,
        
      
        
          "breeder":this.breeder.value
        
      
    };

    this.myForm.setValue({
      
        
          "PersonId":null,
        
      
        
          "Person":null,
        
      
        
          "microChip":null,
        
      
        
          "breeder":null
        
      
    });

    return this.servicePerson.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "PersonId":null,
        
      
        
          "Person":null,
        
      
        
          "microChip":null,
        
      
        
          "breeder":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.block9.Person",
      
        
          
        
    
        
          
            "Person":this.Person.value,
          
        
    
        
          
            "microChip":this.microChip.value,
          
        
    
        
          
            "breeder":this.breeder.value
          
        
    
    };

    return this.servicePerson.updateAsset(form.get("PersonId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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


  deleteAsset(): Promise<any> {

    return this.servicePerson.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.servicePerson.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "PersonId":null,
          
        
          
            "Person":null,
          
        
          
            "microChip":null,
          
        
          
            "breeder":null 
          
        
      };



      
        if(result.PersonId){
          
            formObject.PersonId = result.PersonId;
          
        }else{
          formObject.PersonId = null;
        }
      
        if(result.Person){
          
            formObject.Person = result.Person;
          
        }else{
          formObject.Person = null;
        }
      
        if(result.microChip){
          
            formObject.microChip = result.microChip;
          
        }else{
          formObject.microChip = null;
        }
      
        if(result.breeder){
          
            formObject.breeder = result.breeder;
          
        }else{
          formObject.breeder = null;
        }
      

      this.myForm.setValue(formObject);

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

  resetForm(): void{
    this.myForm.setValue({
      
        
          "PersonId":null,
        
      
        
          "Person":null,
        
      
        
          "microChip":null,
        
      
        
          "breeder":null 
        
      
      });
  }

}
