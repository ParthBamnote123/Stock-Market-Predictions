import { LightningElement, wire, api } from 'lwc';
import getPredictions from '@salesforce/apex/StockController.getPredictions';

export default class PredictionDashboard extends LightningElement {
    @api recordId; // Stock__c Id passed from record page
    predictions = [];

    @wire(getPredictions, { stockId: '$recordId' })
    wiredData({ data, error }) {
        if (data) {
            this.predictions = data;
        } else if (error) {
            console.error(error);
        }
    }
}
