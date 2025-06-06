import {
  CurrencyField,
  Expandable,
  Confirmation,
  PageInterface,
  Checkbox,
  CheckboxGroup,
  Tooltip,
  TextInput,
  DateField,
  Dropdown,
  Accordion,
  Select,
  Tabs,
  Tab,
  Switch,
  GroupOption,
  TextField,
  RadioButtonGroup,
  GenderField,
  MemorableDateField,
  Postcode,
  NumberField,
  PassCodeField,
  TextArea,
} from '@interstellar/test-components';
import { Given, When } from '@interstellar/wdio-dependencies';

Given('I am on the {string} page', async function (pageName) {
  const currentPage: PageInterface = globalThis[`${pageName}Page`];
  await currentPage.open();
});

//Accordion component
When('I expand the first component of the accordion', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const firstExpandable: Expandable = await accordion.getExpandable(0);
  return firstExpandable.expand();
});

When('I collapse the first component of the accordion', async function () {
  const accordion: Accordion = accordionPage.getComponent('testAcc');
  const firstExpandable: Expandable = await accordion.getExpandable(0);
  // This method is either expanding or collapsing, according to the previous state
  return firstExpandable.expand();
});

//Checkbox component
When('I tick the checkbox', async function () {
  const checkbox: Checkbox = checkboxPage.getComponent('checkbox');
  return checkbox.tick();
});

//Checkbox group component
Given('I tick all the checkboxes', async function () {
  const checkboxGroup: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  return checkboxGroup.selectAllCheckboxes();
});

When('I expand the checkboxgroup tooltip', async function () {
  const checkboxGroupComponent: CheckboxGroup =
    checkboxGroupPage.getComponent('checkboxGroup');
  const tooltip: Tooltip = checkboxGroupComponent.getTooltip();
  await tooltip.expand();
});

//Confirmation component
Given('I select the confirmation checkbox', async function () {
  const confirmationComponent: Confirmation = confirmationPage.getComponent(
    'confirmationComponent',
  );
  const confirmationCheckbox: Checkbox = confirmationComponent.getCheckbox();
  return confirmationCheckbox.tick();
});

//Currency field component
Given('I input an alphanumeric value to the currency field', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyInput: TextInput = currencyField.getInput();
  return currencyInput.inputText('a A0*1');
});

Given('I clear the currency field', async function () {
  const currencyField: CurrencyField =
    currencyFieldPage.getComponent('currencyField');
  const currencyInput: TextInput = currencyField.getInput();
  await currencyInput.clearText();
});

//Date field component
When('I enter the day for date field', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  await dateField.enterDay(5);
});

When('I enter the month for date field', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  await dateField.enterMonthByName('July');
});

When('I enter the year for date field', async function () {
  const dateField: DateField = dateFieldPage.getComponent('dateField');
  await dateField.enterYear(1998);
});

//Dropdown component
// This one is also an example of using a keyword with parameters
When(
  'I select the first option for {string}',
  async function (componentName: string) {
    const dropdown: Dropdown = dropdownPage.getComponent(componentName);
    await dropdown.selectByVisibleText('First');
    // These below throw an error, here only for illustrational purpose
    // Passing an index too big, making sure right error is displayed
    // await dropdownPage.getComponent(componentName).selectByIndex(12);
    // Using the wrong key to select an option
    // await dropdownPage.getComponent(componentName).selectByVisibleText('Firsst');
  },
);

//Gender field component
When('I select the Male option', async function () {
  const genderField: GenderField = genderFieldPage.getComponent('genderField');

  const genderFieldOptions: GroupOption =
    await genderField.getOptionByText('Male');
  return genderFieldOptions.click();
});

When('I expand the gender tooltip', async function () {
  const genderFieldComponent: GenderField =
    genderFieldPage.getComponent('genderField');
  const tooltip: Tooltip = genderFieldComponent.getTooltip();
  await tooltip.expand();
});

//Memorable date field component
When('I enter the day for memorable date', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  await memorableDateField.enterDay(5);
});

When('I enter the month for memorable date', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  await memorableDateField.enterMonth(5);
});

When('I enter the year for memorable date', async function () {
  const memorableDateField: MemorableDateField =
    memorableDateFieldPage.getComponent('memorableDateField');
  await memorableDateField.enterYear(1998);
});

//Postcode component
When('I input a string to the postcode box', async function () {
  const postcode: Postcode = postcodePage.getComponent('postcode');
  const postcodeInput: TextInput = postcode.getInput();
  await postcodeInput.inputText('SW5 0PX');
});

When('I clear the postcode box', async function () {
  const postcode: Postcode = postcodePage.getComponent('postcode');
  const postcodeInput: TextInput = postcode.getInput();
  await postcodeInput.clearText();
});

//Radio button group component
When('I select the Miss option by text', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const missOption: GroupOption =
    await radioButtonGroup.getOptionByText('Miss');
  return missOption.click();
});

When('I select the Dr option by index', async function () {
  const radioButtonGroup: RadioButtonGroup =
    radioButtonGroupPage.getComponent('radioButtonGroup');
  const drOption: GroupOption = await radioButtonGroup.getOptionByIndex(0);
  return drOption.click();
});

//Select component
When('I select the {string} option of select', async function (text: string) {
  const select: Select = selectPage.getComponent('select');
  await select.selectByVisibleText(text);
});

//Switch component
When('I select the no option', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const switchOption: GroupOption = await switchComponent.getOptionByText('No');
  await switchOption.click();
});

When('I expand the switch tooltip', async function () {
  const switchComponent: Switch = switchPage.getComponent('switch');
  const tooltip: Tooltip = switchComponent.getTooltip();
  await tooltip.expand();
});

//Tabs component
When('I select the second tab', async function () {
  const tabs: Tabs = tabsPage.getComponent('tabs');
  const secondTab: Tab = await tabs.getTab(1);
  return secondTab.select();
});

//Text input component and Text field component
When('I send a value to the text input', async function () {
  const input: TextInput = textInputPage.getComponent('input');
  await input.inputText('a A0*1');
});

Given('I clear the text input box', async function () {
  const input: TextInput = textInputPage.getComponent('input');
  await input.clearText();
});

When('I input a string to the text field', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textInput: TextInput = textField.getTextInput();
  await textInput.inputText('a A0*1');
});

Given('I clear the text field', async function () {
  const textField: TextField = textFieldPage.getComponent('textField');
  const textInput: TextInput = textField.getTextInput();
  await textInput.clearText();
});

//Tooltip component
When('I expand the tooltip', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  return tooltip.expand();
});

When('I close the tooltip', async function () {
  const tooltip: Tooltip = tooltipPage.getComponent('tooltip');
  return tooltip.close();
});

//Numberfield component
When('I increase the amount', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  return numberField.increaseAmount();
});

When('I decrease the amount', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  return numberField.decreaseAmount();
});

When('I insert the value directly in the number field', async function () {
  const numberField: NumberField = numberFieldPage.getComponent('numberfield');
  return numberField.setAmount('10');
});

//Passcode field
When('I send an alphanumeric string', async function () {
  const passCodeField: PassCodeField =
    passCodeFieldPage.getComponent('passCodeField');
  return passCodeField.insertOtp('123a4');
});

//Text Area
When('I send text to the text area', async function () {
  const textArea: TextArea = textAreaPage.getComponent('textArea');
  return textArea.sendText('whatever');
});
