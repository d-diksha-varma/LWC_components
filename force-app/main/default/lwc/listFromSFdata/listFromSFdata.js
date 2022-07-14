import { LightningElement,track,api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/diksha_class.getAccounts'
const columns = [
    { label: 'Label', fieldName: 'name' }
];

export default class ListFromSFdata extends LightningElement {
    @track showcontacts = "Show Contacts";
    @track isvisible = false;
    columns = columns;
    handleClick(event){
        const label = event.target.label;

        if(label==="Show Contacts"){
            this.showcontacts = "Hide contacts";
            this.isvisible = true;
        }
        else if (label==="Hide contacts"){
            this.showcontacts = "Show Contacts";
            this.isvisible = false;

        }
    }
}