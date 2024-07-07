import { LightningElement } from 'lwc';
export default class MainLayout extends LightningElement {
    handleScrollTo(event) {
        const targetId = event.detail;
        console.log('handleScrollTo called with targetId:', targetId);
        const contentContainer = this.template.querySelector('c-content-container');
        console.log('contentContainer:', contentContainer);
        if (contentContainer) {
            const targetElement = contentContainer.getTargetElement(targetId);
            console.log('targetElement:', targetElement);
            if (targetElement) {
                console.log('Scrolling to:', targetElement);
                // Adjust scroll behavior to ensure the element is fully visible
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // // Optionally, add a small delay and then scroll by a small offset to account for fixed headers
                // setTimeout(() => {
                //     const headerOffset = 100; // Adjust the offset as needed
                //     const elementPosition = targetElement.getBoundingClientRect().top;
                //     const offsetPosition = elementPosition - headerOffset;
                //     window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
                // }, 500); // Adjust the delay as needed
            } else {
                console.log('Target element not found:', targetId);
            }
        } else {
            console.log('Content container not found');
        }
    }
}