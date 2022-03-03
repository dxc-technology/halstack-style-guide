import {
  DxcText,
  DxcList,
  DxcTable,
  DxcStack,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import selectSingleSpecsStates from "./images/select_input_states_single.png";
import selectMultipleSpecsStates from "./images/select_input_states_multiple.png";
import selectSingleOptionState from "./images/option_item_states_single.png";
import selectMultipleOptionState from "./images/option_item_states_multiple.png";
import selectAnatomy from "./images/select_anatomy.png";
import selectFilterable from "./images/select_filterable.png";
import selectOptional from "./images/select_optional.png";
import selectSpecs from "./images/select_specs.png";

const SelectSpecs = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>States</HeadingLink>
        <HeadingLink level={3}>Select input</HeadingLink>
        <DxcText as="p">
          States are defined for select component based on the interactions that
          the user can reproduce. The states are: <strong>enabled</strong>,{" "}
          <strong>hover</strong>, <strong>focus</strong>,{" "}
          <strong>active</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>:
        </DxcText>
        <DxcText as="p">
          <Image src={selectSingleSpecsStates} alt="Select states" />
        </DxcText>
        <HeadingLink level={3}>Multiple selection</HeadingLink>
        <DxcText as="p">
          Allows the user to select more than one option from the list.
        </DxcText>
        <DxcText as="p">
          <Image src={selectMultipleSpecsStates} alt="Select multiple option" />
        </DxcText>
        <HeadingLink level={3}>List options</HeadingLink>
        <DxcText as="p">
          To indicate which items are selected and which not, the
          select-multiple variant integrates a checkbox pairing with each option
          from the dropdown.
        </DxcText>
        <HeadingLink level={4}>Single</HeadingLink>
        <Figure caption="List option element states for single select.">
          <Image
            src={selectSingleOptionState}
            alt="List option element states for select single"
          />
        </Figure>
        <HeadingLink level={4}>Multiple</HeadingLink>
        <Figure caption="List option element states for select multiple.">
          <Image
            src={selectMultipleOptionState}
            alt="List option element states for select multiple"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Image src={selectAnatomy} alt="Select anatomy" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>Selection indicator (multiple)</DxcText>
          <DxcText>List dialog</DxcText>
          <DxcText>Action - Clear</DxcText>
          <DxcText>Collapse indicator</DxcText>
          <DxcText>List option</DxcText>
          <DxcText>Divider</DxcText>
          <DxcText>List option label</DxcText>
          <DxcText>List option icon</DxcText>
          <DxcText>List option checkbox (multiple)</DxcText>
          <DxcText>Select value</DxcText>
          <DxcText>List item selected indicator</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Filter</HeadingLink>
        <Figure caption="Filterable single and multi variants.">
          <Image
            src={selectFilterable}
            alt="Filterable single and multi variants"
          />
        </Figure>
        <DxcList>
          <DxcText>Both select variants can be filterable</DxcText>
          <DxcText>
            Use the filter when the number of items in the optionList is
            extremely long (± 15 elements)
          </DxcText>
          <DxcText>
            This list will be reduced to show only the matches as the user types
          </DxcText>
          <DxcText>
            The value will change when the user types a string that matches an
            option from the list or pick one manually
          </DxcText>
          <DxcText>
            When the search does not match any result, a &quot;no matches
            found&quot; message will be displayed
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Required and optional</HeadingLink>
        <Figure caption="Required with error and optional select examples.">
          <Image
            src={selectOptional}
            alt="Required with error and optional select examples"
          />
        </Figure>
        <DxcList>
          <DxcText>
            When labeled as optional, the select will display an option matching
            the placeholder to allow leaving it empty
          </DxcText>
          <DxcText>
            When no optional label appears, the select is required
          </DxcText>
          <DxcText>
            If the select was left empty, the required should display the error
            &quot;This field can not be empty&quot; when the select loses the
            focus
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Design Specifications</HeadingLink>
        <DxcText as="p">
          <Image src={selectSpecs} alt="Select specifications" />
        </DxcText>
        <HeadingLink level={3}>Color</HeadingLink>
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
                <code>labelFontColor</code>
              </td>
              <td>Label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontColor</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>errorMessageColor</code>
              </td>
              <td>Error message</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>valueFontColor</code>
              </td>
              <td>Value</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>placeholderFontColor</code>
              </td>
              <td>Value</td>
              <td>
                <code>color-grey-800-a</code>
              </td>
              <td>#000000b3</td>
            </tr>
            <tr>
              <td>
                <code>disabledColor</code>
              </td>
              <td>All:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>listDialogBackgroundColor</code>
              </td>
              <td>List dialog</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>listDialogBorderColor</code>
              </td>
              <td>List dialog</td>
              <td>
                <code>color-grey-400</code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <code>listOptionFontColor</code>
              </td>
              <td>List option</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>listOptionIconColor</code>
              </td>
              <td>List item icon</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>listOptionDividerColor</code>
              </td>
              <td>Divider</td>
              <td>
                <code>color-grey-200</code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <code>unselectedHoverListOptionBackgroundColor</code>
              </td>
              <td>List option:hover unselected</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>unselectedActiveListOptionBackgroundColor</code>
              </td>
              <td>List option:active unselected</td>
              <td>
                <code>color-grey-200</code>
              </td>
              <td>#e6e6e6</td>
            </tr>
            <tr>
              <td>
                <code>selectedListOptionBackgroundColor</code>
              </td>
              <td>List option selected</td>
              <td>
                <code>color-blue-100</code>
              </td>
              <td>#e6f4ff</td>
            </tr>
            <tr>
              <td>
                <code>selectedHoverListOptionBackgroundColor</code>
              </td>
              <td>List option:hover selected</td>
              <td>
                <code>color-blue-200</code>
              </td>
              <td>#cceaff</td>
            </tr>
            <tr>
              <td>
                <code>selectedActiveListOptionBackgroundColor</code>
              </td>
              <td>List option:active selected</td>
              <td>
                <code>color-blue-300</code>
              </td>
              <td>#99d5ff</td>
            </tr>
            <tr>
              <td>
                <code>selectedListOptionIconColor</code>
              </td>
              <td>List option selected indicator</td>
              <td>
                <code>color-blue-900</code>
              </td>
              <td>#003c66</td>
            </tr>
            <tr>
              <td>
                <code>focusListOptionBorderColor</code>
              </td>
              <td>List option:hover selected</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>systemMessageFontColor</code>
              </td>
              <td>System message</td>
              <td>
                <code>color-grey-700</code>
              </td>
              <td>#666666</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Input</HeadingLink>
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
                <code>enabledInputBorderColor</code>
              </td>
              <td>Border:enabled</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>hoverInputBorderColor</code>
              </td>
              <td>Border:hover</td>
              <td>
                <code>color-purple-500</code>
              </td>
              <td>#a46ede</td>
            </tr>
            <tr>
              <td>
                <code>focusInputBorderColor</code>
              </td>
              <td>Border:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>errorInputBorderColor</code>
              </td>
              <td>Border:error</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>hoverInputErrorBorderColor</code>
              </td>
              <td>Border:hover on error</td>
              <td>
                <code>color-red-600</code>
              </td>
              <td>#fe0123</td>
            </tr>
            <tr>
              <td>
                <code>disabledInputBorderColor</code>
              </td>
              <td>Border:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>disabledInputBackgroundColor</code>
              </td>
              <td>Background:disabled</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>errorIconColor</code>
              </td>
              <td>Error icon</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>collapseIndicatorColor</code>
              </td>
              <td>Collapse indicator</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Selection indicator</HeadingLink>
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
                <code>selectionIndicatorFontColor</code>
              </td>
              <td>Selection indicator value</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>selectionIndicatorBorderColor</code>
              </td>
              <td>Selection indicator</td>
              <td>
                <code>color-grey-400</code>
              </td>
              <td>#bfbfbf</td>
            </tr>
            <tr>
              <td>
                <code>selectionIndicatorBackgroundColor</code>
              </td>
              <td>Selection indicator</td>
              <td>
                <code>color-grey-50</code>
              </td>
              <td>#fafafa</td>
            </tr>
            <tr>
              <td>
                <code>enabledSelectionIndicatorActionBackgroundColor</code>
              </td>
              <td>Selection indicator</td>
              <td>
                <code>color-transparent</code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <code>hoverSelectionIndicatorActionBackgroundColor</code>
              </td>
              <td>Selection indicator:hover</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>activeSelectionIndicatorActionBackgroundColor</code>
              </td>
              <td>Selection indicator:active</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>enabledSelectionIndicatorActionIconColor</code>
              </td>
              <td>Selection indicator icon</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>hoverSelectionIndicatorActionIconColor</code>
              </td>
              <td>Selection indicator icon:hover</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>activeSelectionIndicatorActionIconColor</code>
              </td>
              <td>Selection indicator icon:active</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Clear action</HeadingLink>
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
                <code>actionBackgroundColor</code>
              </td>
              <td>Action</td>
              <td>
                <code>color-transparent</code>
              </td>
              <td>transparent</td>
            </tr>
            <tr>
              <td>
                <code>hoverActionBackgroundColor</code>
              </td>
              <td>Action:hover</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>activeActionBackgroundColor</code>
              </td>
              <td>Action:active</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>actionIconColor</code>
              </td>
              <td>Action icon</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>hoverActionIconColor</code>
              </td>
              <td>Action icon:hover</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>activeActionIconColor</code>
              </td>
              <td>Action icon:active</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Typography</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Component token</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>fontFamily</code>
              </td>
              <td>All</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>labelFontSize</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>labelFontWeight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-weight-semibold</code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <code>labelFontStyle</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>labelLineHeight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-leading-loose-01</code>
              </td>
              <td>1.715em</td>
            </tr>
            <tr>
              <td>
                <code>optionalLabelFontWeight</code>
              </td>
              <td>Label optional</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>valueFontSize</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-scale-03</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>valueFontWeight</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>valueFontStyle</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>valueLineHeight</code>
              </td>
              <td>Value</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontSize</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-scale-01</code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontWeight</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>helperTextFontStyle</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>helperTextLineHeight</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>listOptionFontSize</code>
              </td>
              <td>List option</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>listOptionFontWeight</code>
              </td>
              <td>List option</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>listOptionFontStyle</code>
              </td>
              <td>List option</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>listGroupLabelFontWeight</code>
              </td>
              <td>List group item</td>
              <td>
                <code>font-weight-semibold</code>
              </td>
              <td>600</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Border</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>Input container:focus</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>Input container:error</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>List dialog</td>
              <td>
                <code>shadow-default</code>
              </td>
              <td>0 4px 6px -1px rgba(0,0,0,0.1)</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>Input</td>
              <td>
                <code>border-radius-medium</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>Selection indicator / Clear action</td>
              <td>
                <code>border-radius-small</code>
              </td>
              <td>0.125rem / 2px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Spacing</HeadingLink>
        <DxcText as="p">
          The select component <strong>input</strong> share the{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/text-input"
            text=" same spacing tokens of the text input"
          />
          .
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Property</th>
              <th>Element</th>
              <th>Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>padding-left</code>
              </td>
              <td>List dialog</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>padding-right</code>
              </td>
              <td>List dialog</td>
              <td>
                <code>spacing-8</code>
              </td>
              <td>0.5rem / 8px</td>
            </tr>
            <tr>
              <td>
                <code>margin-top</code>
              </td>
              <td>List dialog content</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>margin-bottom</code>
              </td>
              <td>List dialog content</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>padding-top</code>
              </td>
              <td>List option</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>padding-bottom</code>
              </td>
              <td>List option</td>
              <td>
                <code>spacing-4</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Size</HeadingLink>
        <DxcText as="p">
          The component <code>width</code> can adopt the following values:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>Width</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>small</code>
              </td>
              <td>240px</td>
            </tr>
            <tr>
              <td>
                <code>medium</code> (<em>default</em>)
              </td>
              <td>360px</td>
            </tr>
            <tr>
              <td>
                <code>large</code>
              </td>
              <td>480px</td>
            </tr>
            <tr>
              <td>
                <code>fillParent</code>
              </td>
              <td>100%</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Margin</HeadingLink>
        <DxcText as="p">
          Select <code>margin</code> can use the values:
        </DxcText>
        <DxcTable>
          <thead>
            <tr>
              <th>margin</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>xxsmall</code>
              </td>
              <td>6px</td>
            </tr>
            <tr>
              <td>
                <code>xsmall</code>
              </td>
              <td>16px</td>
            </tr>
            <tr>
              <td>
                <code>small</code>
              </td>
              <td>24px</td>
            </tr>
            <tr>
              <td>
                <code>medium</code>
              </td>
              <td>36px</td>
            </tr>
            <tr>
              <td>
                <code>large</code>
              </td>
              <td>48px</td>
            </tr>
            <tr>
              <td>
                <code>xlarge</code>
              </td>
              <td>64px</td>
            </tr>
            <tr>
              <td>
                <code>xxlarge</code>
              </td>
              <td>100px</td>
            </tr>
          </tbody>
        </DxcTable>
        <DxcText as="p">
          These values can be applied independently to each side of the
          component:
          <code>top</code> <code>bottom</code> <code>left</code>{" "}
          <code>right</code>
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Accessibility</HeadingLink>
        <HeadingLink level={3}>WCAG 2.2</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
              text="SC 3.2.2: On Input"
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>WAI-ARIA 1.2</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#combobox"
              text="3.8 Combobox"
            />
          </DxcText>
          <DxcText>
            WAI-ARIA practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox"
              text="3.14 Listbox"
            />
          </DxcText>
          <DxcText>
            WAI-ARIA examples 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-autocomplete-none.html"
              text="Editable Combobox without Autocomplete Example"
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/select/specs/SelectSpecsPage.tsx" />
    </DxcStack>
  );
};

export default SelectSpecs;
