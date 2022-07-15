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
            console.log("result=======>"+JSON.stringify(result));
            let arrFun = [];

            for (var i=0 ; i<result.length ;i++){
                arrFun.push({ label:result[i].Name , value:result[i].Id});
            }
            this.accOption = arrFun;
            console.log("accOption=======>:"+JSON.stringify(this.accOption));
            console.log("arrFun=======>:"+JSON.stringify( arrFun));

        })
        .catch(error => {
            console.error("error=======>"+JSON.stringify(error));   
        });
    }

    handleChange(event){
        this.value = event.detail.value;
    }
}
