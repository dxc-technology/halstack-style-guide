import {
  DxcText,
  DxcList,
  DxcTable,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";
import dateSpecsStates from "./images/input_date_states.png";
import dateSpecsPopup from "./images/date_popup.png";
import dateSpecsAnatomy from "./images/input_date_anatomy.png";
import dateSpecs from "./images/input_date_specs.png";
import datePopupSpecs from "./images/date_popup_specs.png";

const DateInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Date input design specifications">
          <Image src={dateSpecs} alt="date input design specifications" />
        </Figure>
        <DxcText as="p">
          The date input <code>color</code>, <code>typography</code>,{" "}
          <code>border</code>, <code>spacing</code>, <code>width</code> and{" "}
          <code>margin</code> specifications are inherited from the text input,
          for reference{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/text-input"
            text="check the text input component documentation"
          />
          .
        </DxcText>
        <DxcText as="p">
          The date input doesn&#39;t have the following text input elements or
          properties, therefore, their listed styles don&#39;t apply:
        </DxcText>
        <DxcList>
          <DxcText>Prefix / Suffix</DxcText>
          <DxcText>
            The size <code>small</code> is not available
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Datepicker dialog</HeadingLink>
        <Figure caption="Structure and spacing for date picker calendar pop-up">
          <Image src={datePopupSpecs} alt="Date specifications for picker" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <HeadingLink level={4}>Date input</HeadingLink>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong>, and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Examples of date input states">
          <Image src={dateSpecsStates} alt="Examples of date input states" />
        </Figure>
        <HeadingLink level={4}>Date dialog</HeadingLink>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, and <strong>selected</strong>.
        </DxcText>
        <Figure caption="Examples of the calendar dialog states">
          <Image
            src={dateSpecsPopup}
            alt="Examples of the calendar dialog states"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={dateSpecsAnatomy} alt="Component anatomy example" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>Input container</DxcText>
          <DxcText>Date button</DxcText>
          <DxcText>Clear action</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Placeholder / value</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Internationalization</HeadingLink>
        <DxcText as="p">
          The date format depends on an ISO definition for each country and the
          preference of use within the application.
        </DxcText>
        <DxcText as="p">
          The format of the date may vary depending on language, region, country
          or customer. It is a good practice to give to the user some type of
          hint about the date format and in many cases.
        </DxcText>
        <DxcList>
          <DxcText>
            The default format for the United States is <code>mm/dd/yyyy</code>
          </DxcText>
          <DxcText>
            The default format for Australia, Europe, Africa, South America most
            countries of Asia is <code>dd/mm/yyyy</code>
          </DxcText>
          <DxcText>
            The default format in China is <code>yyyy/mm/dd</code>
          </DxcText>
        </DxcList>
      </DxcStack>
      {/* <DxcStack gutter="large"> */}
      {/* <HeadingLink level={2}>Design Specifications</HeadingLink>
        <HeadingLink level={3}>Date input</HeadingLink>
        <Figure caption="Date input design specifications">
          <Image src={dateSpecs} alt="date input design specifications" />
        </Figure> */}
      {/* <DxcText as="p">
          The date input <code>color</code>, <code>typography</code>,{" "}
          <code>border</code>, <code>spacing</code>, <code>width</code> and{" "}
          <code>margin</code> specifications are inherited from the text input,
          for reference{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/text-input"
            text="check the text input component documentation"
          />
          .
        </DxcText> */}
      {/* <DxcText as="p">
          The date input doesn&#39;t have the following text input elements or
          properties, therefore, their listed styles don&#39;t apply:
        </DxcText> */}
      {/* <DxcList>
          <DxcText>Prefix / Suffix</DxcText>
          <DxcText>
            The size <code>small</code> is not available
          </DxcText>
        </DxcList> */}
      {/* <HeadingLink level={3}>Datepicker dialog</HeadingLink>
        <Figure caption="Structure and spacing for date picker calendar pop-up">
          <Image src={datePopupSpecs} alt="Date specifications for picker" />
        </Figure> */}
      {/* </DxcStack> */}
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>pickerBackgroundColor</code>
              </td>
              <td>Dialog container</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>pickerDayFontColor</code>
              </td>
              <td>Dialog text</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>pickerCurrentDateColor</code>
              </td>
              <td>Dialog title</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>pickerHoverDateBackgroundColor</code>
              </td>
              <td>Container background</td>
              <td>
                <code>color-purple-200</code>
              </td>
              <td>#e5d5f6</td>
            </tr>
            <tr>
              <td>
                <code>pickerSelectedDateColor</code>
              </td>
              <td>Date text:selected</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>pickerSelectedDateBackgroundColor</code>
              </td>
              <td>Date background:hover</td>
              <td>
                <code>color-purple-700</code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <code>pickerHoverDateFontColor</code>
              </td>
              <td>Date text:hover</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>pickerYearFontColor</code>
              </td>
              <td>Year label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>pickerMonthFontColor</code>
              </td>
              <td>Mont label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>pickerWeekFontColor</code>
              </td>
              <td>Weekday label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>pickerMonthArrowsBackgroundColor</code>
              </td>
              <td>Month selection controls</td>
              <td>
                <code>color-transparent</code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <code>pickerFocusColor</code>
              </td>
              <td>Focus indicator</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={4}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>pickerFontFamily</code>
              </td>
              <td>Datepicker dialog</td>
              <td>font-family-sans`</td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Year selector</td>
              <td>
                <code>font-scale-03</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Current month</td>
              <td>-</td>
              <td>13px</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Day</td>
              <td>-</td>
              <td>13px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Year selector</td>
              <td>
                <code>font-weight-semibold</code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Current month</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Day</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={4}>Spacing</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Core token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>padding</code>
              </td>
              <td>Calendar container</td>
              <td>
                <code>spacing-16</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>padding-left/right</code>
              </td>
              <td>Month container</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-left/right</code>
              </td>
              <td>Year selector</td>
              <td>
                <code>spacing-16</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>padding-top/bottom</code>
              </td>
              <td>Separator</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={4}>Sizing</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>height/width</code>
              </td>
              <td>Selected date circle</td>
              <td>28/28px</td>
            </tr>
            <tr>
              <td>
                <code>height/width</code>
              </td>
              <td>Year selection caret</td>
              <td>24/24px</td>
            </tr>
            <tr>
              <td>
                <code>height/width</code>
              </td>
              <td>Calendar top controls</td>
              <td>24/24px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
              text="SC 2.1.1: Keyboard"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap"
              text="SC 2.1.2: No keyboard trap"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
              text="SC 2.4.6: Headings and labels"
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              text="SC 2.4.7: Focus Visible"
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA authoring practices 1.2 -
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal"
              text=" 3.9 Dialog modal"
            />
          </DxcText>
          <DxcText>
            WAI-ARIA authoring practices 1.2 -
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html"
              text=" Date picker design pattern"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/date-input/specs/DateInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default DateInputSpecsPage;
