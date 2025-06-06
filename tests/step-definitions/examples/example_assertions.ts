const assert = require('node:assert');

import {
  CurrencyField,
  Expandable,
  Button,
  Notification,
  Checkbox,
  CheckboxGroup,
  Tooltip,
  TextInput,
  DateField,
  Dialog,
  DisplayText,
  Dropdown,
  Heading,
  Icon,
  List,
  ListItem,
  Link,
  Paragraph,
  Accordion,
  Spinner,
  Select,
  ErrorSummary,
  SummaryBox,
  Table,
  Cell,
  Tabs,
  Tab,
  Switch,
  GroupOption,
  TextField,
  RadioButtonGroup,
  GenderField,
  ErrorSummaryLink,
  MemorableDateField,
  Postcode,
  NumberField,
  PassCodeField,
  TextArea,
} from '@interstellar/test-components';
import { Given, Then } from '@interstellar/wdio-dependencies';

//Accordion component
Then('First expandable text is correct', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const firstExpandable: Expandable = await accordion.getExpandable(0);
  const firstExpandableText: string = await firstExpandable.getText();
  assert(firstExpandableText === 'Need help?');
});

Then('Second expandable text is correct', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const secondExpandable: Expandable = await accordion.getExpandable(0);
  const secondExpandableText: string = await secondExpandable.getText();
  assert(secondExpandableText === 'Need help?');
});

Then('First component of the accordion is expanded', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const firstExpandable: Expandable = await accordion.getExpandable(0);
  let isExpanded: boolean = await firstExpandable.isExpanded();
  assert(isExpanded === true);
});

Then('Second component of the accordion is collapsed', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const secondExpandable: Expandable = await accordion.getExpandable(1);
  let isExpanded: boolean = await secondExpandable.isExpanded();
  assert(isExpanded === false);
});

Then('First component of the accordion is collapsed', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const firstExpandable: Expandable = await accordion.getExpandable(0);
  let isExpanded: boolean = await firstExpandable.isExpanded();
  assert(isExpanded === false);
});

//Button component
Then('Button is displayed correctly', async function () {
  const button: Button = buttonPage.getComponent('testButton');
  const isButtonDisplayed: boolean = await buttonPage.contains(button);
  assert(isButtonDisplayed === true);
});

Then('Button text is correct', async function () {
  const button: Button = buttonPage.getComponent('testButton');
  const buttonText: string = await button.getText();
  assert(buttonText === 'Button');
});

//Checkbox component
Then('Checkbox is displayed', async function () {
  const checkbox: Checkbox = checkboxPage.getComponent('checkbox');
  const isCheckboxDisplayed: boolean = await checkboxPage.contains(checkbox);
  assert(isCheckboxDisplayed === true);
});

Then('Checkbox is not selected', async function () {
  const checkbox: Checkbox = checkboxPage.getComponent('checkbox');
  const isCheckboxDisplayed: boolean = await checkboxPage.contains(checkbox);
  assert(isCheckboxDisplayed === true);
});

Then('Checkbox text is correct', async function () {
  const checkbox: Checkbox = checkboxPage.getComponent('checkbox');
  const checkboxLabel: string = await checkbox.getText();
  assert(checkboxLabel === 'Check me');
});

Then('Checkbox is ticked', async function () {
  const checkbox: Checkbox = checkboxPage.getComponent('checkbox');
  const isCheckboxTicked: boolean = await checkbox.isChecked();
  assert(isCheckboxTicked === true);
});

//Checkbox group component
Then('Checkbox group is displayed', async function () {
  const checkboxGroup: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const isCheckboxGroupDisplayed: boolean =
    await checkboxGroupPage.contains(checkboxGroup);
  assert(isCheckboxGroupDisplayed === true);
});

Given('All the checkboxes are ticked', async function () {
  const checkboxGroup: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const allCheckboxSelected: boolean =
    await checkboxGroup.hasAllCheckboxesSelected();
  assert(allCheckboxSelected === true);
});

Then('Checkboxgroup tooltip is displayed correctly', async function () {
  const checkboxGroupComponent: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const tooltip: Tooltip = checkboxGroupComponent.getTooltip();
  const tooltipText: string = await tooltip.getText();
  assert(tooltipText === 'Example tooltip');
});

Then('Checkboxgroup tooltip is closed', async function () {
  const checkboxGroupComponent: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const tooltip: Tooltip = checkboxGroupComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === true);
});

Then('Checkboxgroup tooltip is expanded', async function () {
  const checkboxGroupComponent: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const tooltip: Tooltip = checkboxGroupComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === false);
});

Then('Expanded checkboxgroup tooltip content is correct', async function () {
  const checkboxGroupComponent: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const tooltip: Tooltip = checkboxGroupComponent.getTooltip();
  const content: string = await tooltip.getContent();
  assert(content.includes('Example tooltip'));
});

//Confirmation component
Given('Confirmation checkbox is selected', async function () {
  const confirmationCheckbox: Checkbox = confirmationPage
    .getComponent('confirmationComponent')
    .getCheckbox();

  const isChecked: boolean = await confirmationCheckbox.isChecked();
  assert(isChecked === true);
});

//Currency field component
Then('currency field is displayed correctly', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const isCurrencyFieldDisplayed: boolean =
    await currencyFieldPage.contains(currencyField);
  assert(isCurrencyFieldDisplayed === true);
});

Then('currency field input is displayed correctly', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyFieldInput: TextInput = currencyField.getInput();
  const isCurrencyFieldInputDisplayed: boolean =
    await currencyFieldPage.contains(currencyFieldInput);
  assert(isCurrencyFieldInputDisplayed === true);
});

Then(
  'currency field supportive text is displayed correctly',
  async function () {
    const currencyField: CurrencyField =
      currencyFieldPage.getComponent('currencyField');
    const currencyFieldSupportiveText: string =
      await currencyField.getSupportiveText();
    assert(currencyFieldSupportiveText === 'Example supportive text');
  },
);

Then('currency field label is displayed correctly', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyFieldLabelText: string = await currencyField.getLabelText();
  assert(currencyFieldLabelText === 'Example label');
});

Given('currency field input is enabled', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyInput: TextInput = currencyField.getInput();
  const isCurrencyInputEnabled: boolean = await currencyInput.isEnabled();
  assert(isCurrencyInputEnabled === true);
});

Given(
  'Only allowed characters are displayed in the currency field',
  async function () {
    const currencyField: CurrencyField =
      currencyFieldPage.getComponent('currencyField');
    const currencyInput: TextInput = currencyField.getInput();
    const inputText: string = await currencyInput.getInput();
    assert(inputText === '01');
  },
);

Then('currency field tooltip is displayed correctly', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyFieldTooltip: Tooltip = currencyField.getTooltip();
  const isCurrencyFielTooltipDisplayed: boolean =
    await currencyFieldPage.contains(currencyFieldTooltip);
  assert(isCurrencyFielTooltipDisplayed === true);
});

Given('currency field input is empty', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyInput: TextInput = currencyField.getInput();
  const inputText: string = await currencyInput.getInput();
  assert(inputText === '');
});

//Date field component
Then('date field label is displayed correctly', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldLabel: string = await dateField.getLabelText();
  assert(dateFieldLabel === 'Example label');
});

Then('date field supportive text is displayed correctly', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldSupportiveText: string = await dateField.getSupportiveText();
  assert(dateFieldSupportiveText === 'Example supportive text');
});

Then('date field day input is displayed correctly', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldDayLabel: string = await dateField.getDayLabel();
  assert(dateFieldDayLabel === 'Day');
});

Then('date field tooltip is displayed correctly', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldTooltip: Tooltip = dateField.getTooltip();
  const isTooltipDisplayed: boolean =
    await dateFieldPage.contains(dateFieldTooltip);
  assert(isTooltipDisplayed === true);
});

Then('date field day is correct', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldDay: string = await dateField.getDay();
  assert(dateFieldDay === '5');
});

Then('date field month is correct', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldMonth: string = await dateField.getSelectedMonth();
  assert(dateFieldMonth === 'July');
});

Then('date field year is correct', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  const dateFieldYear: string = await dateField.getYear();
  assert(dateFieldYear === '1998');
});

//Dialog component
Then('dialog is displayed correctly', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  const isDialogDisplayed: boolean = await dialogPage.contains(dialog);
  assert(isDialogDisplayed === true);
});

Then('dialog title is displayed correctly', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  const dialogTitle: string = await dialog.getTitleText();
  assert(dialogTitle === 'Dialog title');
});

Then('dialog paragraph is displayed correctly', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  const dialogParagraph: string = await dialog.getParagraphText();
  const expectedDialogParagraph: string =
    'Body goes here lorem ipsum dolor samet consecteteur adiciping arrivea soldales nulla vespoa';
  assert(dialogParagraph === expectedDialogParagraph);
});

Then('Primary button text is correct', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  const dialogPrimaryButtonText: string = await dialog.getPrimaryButtonText();
  const expectedDialogPrimaryButtonText: string = 'Continue';
  assert(expectedDialogPrimaryButtonText === dialogPrimaryButtonText);
});

Then('Secondary button text is correct', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  const dialogSecondaryButtonText: string =
    await dialog.getSecondaryButtonText();
  const expectedDialogSecondaryButtonText: string = 'Cancel';
  assert(expectedDialogSecondaryButtonText === dialogSecondaryButtonText);
});

Then('I can click on primary button', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  await dialog.clickPrimaryButton();
});

Then('I can click on secondary button', async function () {
  const dialog: Dialog = dialogPage.getComponent('dialog');
  await dialog.clickSecondaryButton();
});

//Display text component
Then('display text is displayed correctly', async function () {
  const displayTextComponent: Dialog =
    displayTextPage.getComponent('displayText');
  const isDisplayTextPresent: boolean =
    await displayTextPage.contains(displayTextComponent);
  assert(isDisplayTextPresent === true);
});

Then('display text is correct', async function () {
  const displayTextComponent: DisplayText =
    displayTextPage.getComponent('displayText');
  const displayText: string = await displayTextComponent.getText();
  assert(displayText === 'Can you do more with your pension right now?');
});

//Dropdown component
Then('First option for {string} is selected', async function (componentName) {
  const dropdown: Dropdown = dropdownPage.getComponent(componentName);
  const dropdownSelectedValue: string = await dropdown.getSelectedValue();
  assert(dropdownSelectedValue === 'First');
});

//Error summary component
Given('error summary is displayed correctly', async function () {
  const errorSummary: ErrorSummary =
    errorSummaryPage.getComponent('errorSummary');
  const heading: string = await errorSummary.getHeading();
  assert(heading === 'There is a problem');
  const firstLink: ErrorSummaryLink = await errorSummary.getLink(0);
  const linkText: string = await firstLink.getText();
  assert(linkText === 'Please enter a valid phone number');
  const linkUrl: string = await firstLink.getLink();
  assert(linkUrl === '#');
});

//Gender field component
Then('gender field is displayed correctly', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const isGenderFieldDisplayed: boolean =
    await genderFieldPage.contains(genderField);
  assert(isGenderFieldDisplayed === true);
});

Then('gender field label is displayed correctly', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const genderFieldLabel: string = await genderField.getLabel();
  assert(genderFieldLabel === 'What is your gender?');
});

Then('gender field supportive text is displayed correctly', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const genderFieldSupportiveText: string =
    await genderField.getSupportiveText();
  assert(genderFieldSupportiveText === 'Example supportive text');
});

Then('gender field tooltip is displayed correctly', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const genderFieldTooltip: Tooltip = genderField.getTooltip();
  const isGenderFieldTooltipDisplayed: boolean =
    await genderFieldPage.contains(genderFieldTooltip);
  assert(isGenderFieldTooltipDisplayed === true);
});

Then('Male option is selected', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const genderFieldOptions: GroupOption =
    await genderField.getOptionByText('Male');
  const isSelected: boolean = await genderFieldOptions.isSelected();
  assert(isSelected === true);
});

Then('Female option is not selected', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');
  const genderFieldOptions: GroupOption =
    await genderField.getOptionByText('Female');
  const isSelected: boolean = await genderFieldOptions.isSelected();
  assert(isSelected === false);
});

Then('The gender tooltip is displayed correctly', async function () {
  const genderFieldComponent: GenderField =
    genderFieldPage.getComponent('genderField');
  const tooltip: Tooltip = genderFieldComponent.getTooltip();
  const tooltipText: string = await tooltip.getText();
  assert(tooltipText === 'Why do we need this information?');
});

Then('The gender tooltip is closed', async function () {
  const genderFieldComponent: GenderField =
    genderFieldPage.getComponent('genderField');
  const tooltip: Tooltip = genderFieldComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === true);
});

Then('The gender tooltip is expanded', async function () {
  const genderFieldComponent: GenderField =
    genderFieldPage.getComponent('genderField');
  const tooltip: Tooltip = genderFieldComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === false);
});

Then('The expanded gender tooltip content is correct', async function () {
  const genderFieldComponent: GenderField =
    genderFieldPage.getComponent('genderField');
  const tooltip: Tooltip = genderFieldComponent.getTooltip();
  const content: string = await tooltip.getContent();
  assert(content.includes('Example tooltip'));
});

//Heading component
Then('heading is displayed correctly', async function () {
  const heading: Heading = headingPage.getComponent('heading');
  const isHeadingPresent: boolean = await headingPage.contains(heading);
  assert(isHeadingPresent === true);
});

Then('heading text is correct', async function () {
  const heading: Heading = headingPage.getComponent('heading');
  const headingText: string = await heading.getText();
  assert(headingText === 'Example Heading');
});

//Icon component
Then('icon is displayed correctly', async function () {
  const icon: Icon = iconPage.getComponent('icon');
  const isIconDisplayed: boolean = await iconPage.contains(icon);
  assert(isIconDisplayed === true);
});

Then('icon dimensions are correct', async function () {
  const icon: Icon = iconPage.getComponent('icon');
  const width: number = await icon.getWidth();
  assert(width === 24);
  const height: number = await icon.getHeight();
  assert(height === 24);
});

//Link component
Then('link is displayed correctly', async function () {
  const link: Link = linkPage.getComponent('link');
  const isLinkDisplayed: boolean = await linkPage.contains(link);
  assert(isLinkDisplayed === true);
});

Then('link text is correct', async function () {
  const link: Link = linkPage.getComponent('link');
  const linkText: string = await link.getText();
  assert(linkText === 'I am a Router Link');
});

Then('link href is correct', async function () {
  const link: Link = linkPage.getComponent('link');
  const linkHref: string = await link.getLink();
  assert(linkHref === '#my-custom-path');
});

//List component
Then('list is displayed correctly', async function () {
  const list: List = listPage.getComponent('testList');
  const isListDisplayed: boolean = await listPage.contains(list);
  assert(isListDisplayed === true);
});

Then('list length is {string}', async function (expectedListLength: string) {
  const list: List = listPage.getComponent('testList');
  const listLength: number = await list.getLength();
  assert(listLength === parseInt(expectedListLength));
});

/* eslint-disable @typescript-eslint/no-unused-vars */
Then('first list item text is {string}', async function (expectedText: string) {
  const list: List = listPage.getComponent('testList');
  const firstListItem: ListItem = await list.getListItem(0);
  const firstListItemText: string = await firstListItem.getText();
  assert(firstListItemText === 'This is a default list item.');
});

//Memorable date field component
Then('memorable date field label is displayed correctly', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  const memorableDateFieldLabel: string =
    await memorableDateField.getLabelText();
  assert(memorableDateFieldLabel === 'Example label');
});

Then(
  'memorable date field supportive text is displayed correctly',
  async function () {
    const memorableDateField: MemorableDateField =
      memorableDateFieldPage.getComponent('memorableDateField');
    const memorableDateFieldSupportiveText: string =
      await memorableDateField.getSupportiveText();
    assert(memorableDateFieldSupportiveText === 'Example supportive text');
  },
);

Then(
  'memorable date field day label is displayed correctly',
  async function () {
    const memorableDateField: MemorableDateField =
      memorableDateFieldPage.getComponent('memorableDateField');
    const memorableDateFieldDayLabel: string =
      await memorableDateField.getDayLabel();
    assert(memorableDateFieldDayLabel === 'Day');
  },
);

Then(
  'memorable date field month label is displayed correctly',
  async function () {
    const memorableDateField: MemorableDateField =
      memorableDateFieldPage.getComponent('memorableDateField');
    const memorableDateFieldMonthLabel: string =
      await memorableDateField.getMonthLabel();
    assert(memorableDateFieldMonthLabel === 'Month');
  },
);

Then(
  'memorable date field year label is displayed correctly',
  async function () {
    const memorableDateField: MemorableDateField =
      memorableDateFieldPage.getComponent('memorableDateField');
    const memorableDateFieldYearLabel: string =
      await memorableDateField.getYearLabel();
    assert(memorableDateFieldYearLabel === 'Year');
  },
);

Then('memorable date day is correct', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  const memorableDateDay: string = await memorableDateField.getDay();
  assert(memorableDateDay === '5');
});

Then('memorable date month is correct', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  const memorableDateMonth: string = await memorableDateField.getMonth();
  assert(memorableDateMonth === '5');
});

Then('memorable date year is correct', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  const memorableDateYear: string = await memorableDateField.getYear();
  assert(memorableDateYear === '1998');
});

//Notification component
Then('Information notification is displayed', async function () {
  const informationNotificationComponent: Notification =
    notificationPage.getComponent('informationNotification');
  const isInformationNotificationDisplayed: boolean =
    await notificationPage.contains(informationNotificationComponent);
  assert(isInformationNotificationDisplayed === true);
});

Then('Information notification content is correct', async function () {
  const informationNotificationComponent: Notification =
    notificationPage.getComponent('informationNotification');
  const informationNotificationContent: string =
    await informationNotificationComponent.getContent();
  assert(
    informationNotificationContent ===
      'Lorem ipsum dolor I am a link ipsum dolor.',
  );
});

Then('Warning notification is displayed', async function () {
  const warningNotificationComponent: Notification =
    notificationPage.getComponent('warningNotification');
  const isWarningNotificationDisplayed: boolean =
    await notificationPage.contains(warningNotificationComponent);
  assert(isWarningNotificationDisplayed === true);
});

Then('Critical notification is displayed', async function () {
  const criticalNotificationComponent: Notification =
    notificationPage.getComponent('criticalNotification');
  const isCriticalNotificationDisplayed: boolean =
    await notificationPage.contains(criticalNotificationComponent);
  assert(isCriticalNotificationDisplayed === true);
});

Then('Success notification is displayed', async function () {
  const successNotificationComponent: Notification =
    notificationPage.getComponent('successNotification');
  const isSuccessNotificationDisplayed: boolean =
    await notificationPage.contains(successNotificationComponent);
  assert(isSuccessNotificationDisplayed === true);
});

//Paragraph component
Then('paragraph is displayed correctly', async function () {
  const paragraph: Paragraph = paragraphPage.getComponent('paragraph');
  const isParagraphDisplayed: boolean = await paragraphPage.contains(paragraph);
  assert(isParagraphDisplayed === true);
  const paragraphText: string = await paragraph.getText();
  assert(paragraphText.startsWith('Lorem ipsum dolor sit amet') === true);
});

//Postcode component
Given('postcode box is enabled', async function () {
  const postcode: Postcode = postcodePage.getComponent('postcode');
  const postcodeInput: TextInput = postcode.getInput();
  const isPostcodeInputEnabled: boolean = await postcodeInput.isEnabled();
  assert(isPostcodeInputEnabled === true);
});

Then('The string is in the postcode box', async function () {
  const postcode: Postcode = postcodePage.getComponent('postcode');
  const postcodeInput: TextInput = postcode.getInput();
  const postcodeInputText: string = await postcodeInput.getInput();
  assert(postcodeInputText === 'SW5 0PX');
});

Then('postcode box is empty', async function () {
  const postcode: Postcode = postcodePage.getComponent('postcode');
  const postcodeInput: TextInput = postcode.getInput();
  const postcodeInputText: string = await postcodeInput.getInput();
  assert(postcodeInputText === '');
});

Then('I can click on postcode button', async function () {
  const postcodeButton: Button = postcodePage
    .getComponent('postcode')
    .getButton();
  await postcodeButton.click();
});

//Radio button group component
Then('radioButtonGroup is displayed correctly', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const isRadioButtonGroupDisplayed: boolean =
    await radioButtonGroupPage.contains(radioButtonGroup);
  assert(isRadioButtonGroupDisplayed === true);
});

Then('radioButtonGroup label is correct', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const radioButtonGroupLabel: string = await radioButtonGroup.getLabelText();
  assert(radioButtonGroupLabel === 'Example label');
});

Then('radioButtonGroup tooltip is correct', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const radioButtonGroupTooltip: Tooltip = radioButtonGroup.getTooltip();
  const radioButtonGroupTooltipText: string =
    await radioButtonGroupTooltip.getText();
  assert(radioButtonGroupTooltipText === 'Example tooltip');
});

Then('The Miss option is selected', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const missOption: GroupOption =
    await radioButtonGroup.getOptionByText('Miss');
  const isMissOptionSelected: boolean = await missOption.isSelected();
  assert(isMissOptionSelected === true);
});

Then('The Dr option is selected', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const drOption: GroupOption = await radioButtonGroup.getOptionByIndex(0);
  const isDrOptionSelected: boolean = await drOption.isSelected();
  assert(isDrOptionSelected === true);
});

//Select component
Then('select option for {string} is selected', async function (text: string) {
  const select: Select = selectPage.getComponent('select');
  const dropdownSelectedValue: string = await select.getSelectedValue();
  assert(dropdownSelectedValue === text);
});

//Spinner component
Then('Spinner title is correct', async function () {
  const spinner: Spinner = spinnerPage.getComponent('spinner');
  const spinnerTitle: string = await spinner.getTitle();
  assert(spinnerTitle === 'Example title');
  const spinnerMessage: string = await spinner.getMessage();
  assert(spinnerMessage === 'Example message');
});

Then('Spinner message is correct', async function () {
  const spinner: Spinner = spinnerPage.getComponent('spinner');
  const spinnerMessage: string = await spinner.getMessage();
  assert(spinnerMessage === 'Example message');
});

//Summary box component
Given('Summary box is displayed correctly', async function () {
  const summaryBox: SummaryBox = summaryBoxPage.getComponent('testSummaryBox');
  const summaryBoxTitle: string = await summaryBox.getTitle();
  assert(summaryBoxTitle === 'Title');
  const summaryBoxContent: string = await summaryBox.getContent();
  assert(summaryBoxContent === 'This is where some copy goes');
});

//Switch component
Then('The no option is selected', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const switchOption: GroupOption = await switchComponent.getOptionByText('No');
  const isSwitchOptionSelected: boolean = await switchOption.isSelected();
  assert(isSwitchOptionSelected === true);
});

Then('The yes option is not selected', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const switchOption: GroupOption =
    await switchComponent.getOptionByText('Yes');
  const isSwitchOptionSelected: boolean = await switchOption.isSelected();
  assert(isSwitchOptionSelected === false);
});

Then('Switch is displayed correctly', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const isSwitchDisplayed: boolean = await switchPage.contains(switchComponent);
  assert(isSwitchDisplayed === true);
});

Then('Switch label is displayed correctly', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const switchLabelText: string = await switchComponent.getLabel();
  assert(switchLabelText === 'Example label');
});

Then('switch tooltip is displayed correctly', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const tooltip: Tooltip = switchComponent.getTooltip();
  const tooltipText: string = await tooltip.getText();
  assert(tooltipText === 'Example tooltip');
});

Then('switch tooltip is closed', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const tooltip: Tooltip = switchComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === true);
});

Then('Switch tooltip is expanded', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const tooltip: Tooltip = switchComponent.getTooltip();
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === false);
});

Then('Expanded switch tooltip content is correct', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const tooltip: Tooltip = switchComponent.getTooltip();
  const content: string = await tooltip.getContent();
  assert(content.includes('Example tooltip'));
});

//Table component
Then('Table is displayed correctly', async function () {
  const table: Table = tablePage.getComponent('table');
  let isTableDisplayed: boolean = await tablePage.contains(table);
  assert(isTableDisplayed === true);
});

Then('First heading is correct', async function () {
  const table: Table = tablePage.getComponent('table');
  const tableHeadings: Array<Cell> = await table.getTableHeadings();
  const firstHeadingFromArray: string = await tableHeadings[1].getContent();
  assert(firstHeadingFromArray === 'Heading 2');
  const firstHeadingContent: string = await table.getTableHeadingContent(1);
  assert(firstHeadingContent === 'Heading 2');
});

Then('Cell content is correct', async function () {
  const table: Table = tablePage.getComponent('table');
  // rows index starts below the headings
  // row 0 is the first below the headings
  // column 0 is the first from the left
  const cellContent: string = await table.getCellContent(0, 2);
  assert(cellContent === 'Row 1c');
});

//Tabs component
Then('Tabs are displayed correctly', async function () {
  const tabs: Tabs = tabsPage.getComponent('tabs');
  const isTabsVisible: boolean = await tabsPage.contains(tabs);
  assert(isTabsVisible === true);
  const tabsNumber: number = await tabs.getTabsNumber();
  assert(tabsNumber === 3);
  const secondTab: Tab = await tabs.getTab(1);
  const secondTabTitle: string = await secondTab.getTitle();
  assert(secondTabTitle === 'Test 2');
});

Then('Second tab is selected', async function () {
  const tabs: Tabs = tabsPage.getComponent('tabs');
  const secondTab: Tab = await tabs.getTab(1);
  const isSecondTabSelected: boolean = await secondTab.isSelected();
  assert(isSecondTabSelected === true);
});

Then('First tab is not selected', async function () {
  const tabs: Tabs = tabsPage.getComponent('tabs');
  const firstTab: Tab = await tabs.getTab(0);
  const isFirstTabSelected: boolean = await firstTab.isSelected();
  assert(isFirstTabSelected === false);
});

//Text input component and Text field component
Given('text input box is enabled', async function () {
  const input: TextInput = textInputPage.getComponent('input');
  const isInputEnabled: boolean = await input.isEnabled();
  assert(isInputEnabled === true);
});

Then('value is in the text input box', async function () {
  const input: TextInput = textInputPage.getComponent('input');
  const inputText: string = await input.getInput();
  assert(inputText === 'a A0*1');
});

Given('The text input box is empty', async function () {
  const input: TextInput = textInputPage.getComponent('input');
  const inputText: string = await input.getInput();
  assert(inputText === '');
});

Given('text field box is enabled', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textInput: TextInput = textField.getTextInput();
  const isTextInputEnabled: boolean = await textInput.isEnabled();
  assert(isTextInputEnabled === true);
});

Then('string is in the text field', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textInput: TextInput = textField.getTextInput();
  const actualText: string = await textInput.getInput();
  assert(actualText === 'a A0*1');
});

Given('text field is empty', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textInput: TextInput = textField.getTextInput();
  const actualText: string = await textInput.getInput();
  assert(actualText === '');
});

Then('textfield is displayed correctly', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const isTextFieldDisplayed: boolean = await textFieldPage.contains(textField);
  assert(isTextFieldDisplayed === true);
});

Then('textfield label is correct', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textFieldLabel: string = await textField.getLabel();
  assert(textFieldLabel === 'Example label');
});

Then('textfield tooltip is correct', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textFieldTooltip: Tooltip = textField.getTooltip();
  const textFieldTooltipText: string = await textFieldTooltip.getText();
  assert(textFieldTooltipText === "What if I don't have a passport?");
});

//Tooltip component
Then('tooltip is displayed correctly', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const isTooltipDisplayed: boolean = await tooltipPage.contains(tooltip);
  assert(isTooltipDisplayed === true);
});

Then('tooltip text is correct', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const tooltipText: string = await tooltip.getText();
  assert(tooltipText === 'What if I dont have a passport?');
});

Then('tooltip is closed', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === true);
});

Then('tooltip is expanded', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const isTooltipClosed: boolean = await tooltip.isClosed();
  assert(isTooltipClosed === false);
});

Then('tooltip content is correct', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const expandedTooltipContent: string = await tooltip.getContent();
  const isExpectedTextContained: boolean = expandedTooltipContent.startsWith(
    'Lorem ipsum dolor sit amet',
  );
  assert(isExpectedTextContained === true);
});

Then('tooltip title is correct', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  const expandedTooltipTitle: string = await tooltip.getExpandedTitle();
  assert(expandedTooltipTitle === 'Example tooltip');
});

Then('number field is displayed correctly', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  const isNumberFieldDisplayed: boolean =
    await numberFieldPage.contains(numberField);
  assert(isNumberFieldDisplayed === true);
});

Then('number field label is correct', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  const numberFieldLabel: string = await numberField.getLabel();
  assert(numberFieldLabel === 'Example label');
});

Then('number field supportive text is correct', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  const numberFieldSupportiveText: string =
    await numberField.getSupportiveText();
  assert(numberFieldSupportiveText === 'Example supportive text');
});

Then('number field value is {string}', async function (value: string) {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  const numberFieldValue: string = await numberField.getAmount();
  assert(numberFieldValue === value);
});

Then('passcode field is displayed correctly', async function () {
  const passcodeField: PassCodeField =
    passCodeFieldPage.getComponent('passCodeField');
  const isPassCodeFieldDisplayed: boolean =
    await passCodeFieldPage.contains(passcodeField);
  assert(isPassCodeFieldDisplayed === true);
});

Then('passcode field label is correct', async function () {
  const passcodeField: PassCodeField =
    passCodeFieldPage.getComponent('passCodeField');
  const passCodeFieldLabel: string = await passcodeField.getLabel();
  assert(passCodeFieldLabel === 'Enter your one-time passcode');
});

Then('passcode field tooltip is correct', async function () {
  const passcodeField: PassCodeField =
    passCodeFieldPage.getComponent('passCodeField');
  const passCodeFieldTooltip: Tooltip = await passcodeField.getTooltip();
  const passCodeFieldTooltipText: string = await passCodeFieldTooltip.getText();
  assert(passCodeFieldTooltipText === 'How do I find my OTP?');
});

Then('only numbers are displayed', async function () {
  const passcodeField: PassCodeField =
    passCodeFieldPage.getComponent('passCodeField');
  const passCodeFieldValue: string = await passcodeField.getOtpValue();
  assert(passCodeFieldValue.trim() === '1234');
});

//Text Area
Then('Text area is displayed correctly', async function () {
  const textArea: TextArea = textAreaPage.getComponent('textArea');
  const isTextAreaDisplayed: boolean = await textAreaPage.contains(textArea);
  assert(isTextAreaDisplayed === true);
});

Then('text area contains the right text', async function () {
  const textArea: TextArea = textAreaPage.getComponent('textArea');
  const textAreaContent: string = await textArea.getText();
  assert(textAreaContent === 'whatever');
});

Then('Text Area Error is not triggered', async function () {
  const textArea: TextArea = textAreaPage.getComponent('textArea');
  const isErrorTriggered: boolean = await textArea.isErrorTriggered();
  // invert logic here to check error IS triggered
  assert(isErrorTriggered === false);
});
