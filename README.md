# LWC VerticalNavigation ScrollIntoView
Demonstrating the use of [SLDS](https://design-system-site-spring-24-b5fb3de26459.herokuapp.com/getting-started/ "Salesforce Lightning Design System") to create a Single Page Application layout comprised of six LWC components that include Vertical Navigation and utilize the ScrollIntoView functionality

![LWC VerticalNavigation ScrollIntoView](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJscHdlcDl4eXJrZWc1cjE1cDh1OHVydTZuMGt1ZTI3bzdlcHNwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6e4hBAwKUM8UE3CU0Q/giphy.gif)

**Functionality Overview**
As you can see in the animation, I have a vertical navigation bar on the left side that remains fixed as you scroll. Clicking on a navigation item smoothly scrolls the corresponding content section into view, providing a seamless user experience.

This functionality is particularly useful for single-page applications (SPAs) where you have a lot of content on a single page. It allows users to easily navigate between different sections without needing to reload the entire page.

**Technical Details**
For those interested in the technical implementation, I've utilized the following:
<ul>
<li><strong>Fixed Left Positioning:</strong> The navigation bar is positioned to stay fixed on the left side of the screen using CSS classes.</li>
<li><strong>Event Handlers:</strong> Clicking on a navigation item triggers an event handler that utilizes the scrollIntoView method to smoothly scroll the relevant content section into view.</li>
<li><strong>LWC Components:</strong> This functionality is built entirely with reusable LWC components, promoting modularity and maintainability.</li>
</ul>

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
