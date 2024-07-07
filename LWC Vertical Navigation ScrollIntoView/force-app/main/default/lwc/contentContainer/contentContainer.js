import { LightningElement, api } from 'lwc';
export default class ContentContainer extends LightningElement {
    componentMap = {};
    handleSlotChange(event) {
        const slot = event.target;
        const assignedElements = slot.assignedElements();
        console.log(`Slot ${slot.name} changed. Assigned elements:`, assignedElements);
        if (assignedElements.length > 0) {
            this.componentMap[slot.name] = assignedElements[0];
        }
    }
    @api
    getTargetElement(targetId) {
        console.log('getTargetElement called with targetId:', targetId);
        const element = this.componentMap[targetId];
        console.log('Found element:', element);
        return element;
    }
}