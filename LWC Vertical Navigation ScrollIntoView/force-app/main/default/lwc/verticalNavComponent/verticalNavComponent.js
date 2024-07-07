import { LightningElement } from 'lwc';
export default class VerticalNavComponent extends LightningElement {
    renderedCallback() {
        console.log('Vertical Nav Component - renderedCallback');
        this.template.querySelectorAll('a[data-target]').forEach(anchor => {
            anchor.addEventListener('click', this.handleNavigation.bind(this));
        });
    }
    handleNavigation(event) {
        console.log('Vertical Nav Component - handleNavigation called');
        event.preventDefault();
        const target = event.target.closest('a[data-target]');
        console.log('target :', target);
        if (target) {
            const targetId = target.dataset.target;
            console.log('Navigation: target found:', targetId);
            this.dispatchEvent(new CustomEvent('scrollto', { detail: targetId }));
        } else {
            console.log('No navigation target found');
        }
    }
}