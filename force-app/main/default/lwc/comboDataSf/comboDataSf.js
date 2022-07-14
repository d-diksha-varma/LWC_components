import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ComboDataSfclass.getAccounts';

export default class ComboDataSf extends LightningElement {
   @track value='';
   @track accOption = [];

    get options(){
        return this.accOption;
    }

    connectedCallback(){
        //const myvar
        getAccounts()
        .then(result => {
           const diksha = JSON.parse(JSON.stringify(result));
            console.log("diksha=======>" , diksha);
            let arrFun = [];
            for (let i = 0 ; i<= result.length ; i++){
                arrFun.push({ label : diksha[i].Name , value : diksha[i].Id});
            }
            this.accOption = arrFun;
            console.log("diksha varma=======>" , this.accOption );
            console.log("ajay verma=======>" , arrFun );

        })
        
        .catch(error => {
            this.error = error;
        });
    }

    handleChange(event){
        this.value = event.detail.value;
    }
}