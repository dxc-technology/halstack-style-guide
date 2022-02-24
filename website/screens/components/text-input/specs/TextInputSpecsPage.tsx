const TextInputSpecsPage = () => {
  return (
    <div>
      <h2 id="states">States</h2>
      <p>
        Text input states: <strong>enabled</strong>, <strong>hover</strong>,
        <strong>focus</strong>, <strong>error</strong> and{" "}
        <strong>disabled</strong>.
      </p>
      <p>
        <img
          src="images/input_states.png"
          alt="Example of the text input component states"
        />
      </p>
      <p>
        <em>Example of the text input component states</em>
      </p>
      <h2 id="anatomy">Anatomy</h2>
      <p>
        <img src="images/input_anatomy.png" alt="Text input anatomy" />
      </p>
      <ol>
        <li>Label text</li>
        <li>Helper text (Optional)</li>
        <li>Error indicator</li>
        <li>Clear action (Optional)</li>
        <li>Input action (Optional)</li>
        <li>Input container</li>
        <li>Placeholder text</li>
        <li>Error message</li>
        <li>Prefix</li>
      </ol>
      <h2 id="design-specifications">Design Specifications</h2>
      <p>
        <img
          src="images/input_specs.png"
          alt="Specifications for text input component"
        />
      </p>
      <p>
        <em>Specifications for text input component</em>
      </p>
      <h2 id="color">Color</h2>
      <h3 id="base">Base</h3>
      <table>
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
              <code>placeholderFontColor</code>
            </td>
            <td>Placeholder</td>
            <td>
              <code>color-grey-600</code>
            </td>
            <td>#808080</td>
          </tr>
          <tr>
            <td>
              <code>enabledBorderColor</code>
            </td>
            <td>Border:enabled</td>
            <td>
              <code>color-black</code>
            </td>
            <td>#000000</td>
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
              <code>actionBackgroundColor</code>
            </td>
            <td>Action</td>
            <td>
              <code>color-transparent</code>
            </td>
            <td>#transparent</td>
          </tr>
        </tbody>
      </table>
      <h3 id="interactive">Interactive</h3>
      <table>
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
              <code>hoverBorderColor</code>
            </td>
            <td>Border:hover</td>
            <td>
              <code>color-purple-500</code>
            </td>
            <td>#a46ede</td>
          </tr>
          <tr>
            <td>
              <code>focusBorderColor</code>
            </td>
            <td>Border:focus</td>
            <td>
              <code>color-blue-600</code>
            </td>
            <td>#0095ff</td>
          </tr>
          <tr>
            <td>
              <code>errorBorderColor</code>
            </td>
            <td>Border:error</td>
            <td>
              <code>color-red-700</code>
            </td>
            <td>#d0011b</td>
          </tr>
          <tr>
            <td>
              <code>hoverErrorBorderColor</code>
            </td>
            <td>Border:hover on error</td>
            <td>
              <code>color-red-600</code>
            </td>
            <td>#fe0123</td>
          </tr>
          <tr>
            <td>
              <code>disabledBorderColor</code>
            </td>
            <td>Border:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
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
              <code>disabledContainerFillColor</code>
            </td>
            <td>Input container:disabled</td>
            <td>
              <code>color-grey-100</code>
            </td>
            <td>#f2f2f2</td>
          </tr>
          <tr>
            <td>
              <code>disabledLabelFontColor</code>
            </td>
            <td>Label:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
          </tr>
          <tr>
            <td>
              <code>disabledValueFontColor</code>
            </td>
            <td>Value:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
          </tr>
          <tr>
            <td>
              <code>disabledHelperTextFontColor</code>
            </td>
            <td>Helper text:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
          </tr>
          <tr>
            <td>
              <code>disabledPlaceholderFontColor</code>
            </td>
            <td>Placeholder:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
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
              <code>focusActionBorderColor</code>
            </td>
            <td>Action:focus</td>
            <td>
              <code>color-blue-600</code>
            </td>
            <td>#0095ff</td>
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
              <code>disabledActionBackgroundColor</code>
            </td>
            <td>Action:disabled</td>
            <td>
              <code>color-transparent</code>
            </td>
            <td>transparent</td>
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
              <code>focusActionIconColor</code>
            </td>
            <td>Action icon:focus</td>
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
          <tr>
            <td>
              <code>disabledActionIconColor</code>
            </td>
            <td>Action icon:disabled</td>
            <td>
              <code>color-grey-500</code>
            </td>
            <td>#999999</td>
          </tr>
        </tbody>
      </table>
      <h3 id="suffix-prefix">Suffix/Prefix</h3>
      <table>
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
              <code>suffixColor</code>
            </td>
            <td>Suffix</td>
            <td>
              <code>color-grey-700</code>
            </td>
            <td>#666666</td>
          </tr>
          <tr>
            <td>
              <code>prefixColor</code>
            </td>
            <td>Prefix</td>
            <td>
              <code>color-grey-700</code>
            </td>
            <td>#666666</td>
          </tr>
          <tr>
            <td>
              <code>disabledSuffixColor</code>
            </td>
            <td>Suffix:disabled</td>
            <td>
              <code>color-grey-400</code>
            </td>
            <td>#bfbfbf</td>
          </tr>
          <tr>
            <td>
              <code>disabledPrefixColor</code>
            </td>
            <td>Prefix:disabled</td>
            <td>
              <code>color-grey-400</code>
            </td>
            <td>#bfbfbf</td>
          </tr>
        </tbody>
      </table>
      <h3 id="typography">Typography</h3>
      <table>
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
              <code>font-weight-bold</code>
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
              <code>helperTextFontSize</code>
            </td>
            <td>Helper text</td>
            <td>
              <code>font-scale-01</code>
            </td>
            <td>12px</td>
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
              <code>optionalLabelFontWeight</code>
            </td>
            <td>Optional indicator</td>
            <td>
              <code>font-weight-regular</code>
            </td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
      <table>
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
              <code>font-size</code>
            </td>
            <td>Error message</td>
            <td>
              <code>font-scale-01</code>
            </td>
            <td>0.75rem / 12px</td>
          </tr>
          <tr>
            <td>
              <code>font-weight</code>
            </td>
            <td>Error message</td>
            <td>
              <code>font-weight-regular</code>
            </td>
            <td>400</td>
          </tr>
          <tr>
            <td>
              <code>line-height</code>
            </td>
            <td>Value</td>
            <td>
              <code>font-leading-normal</code>
            </td>
            <td>1.5em</td>
          </tr>
          <tr>
            <td>
              <code>line-height</code>
            </td>
            <td>Error message</td>
            <td>
              <code>font-leading-normal</code>
            </td>
            <td>1.5em</td>
          </tr>
          <tr>
            <td>
              <code>font-size</code>
            </td>
            <td>Placeholder</td>
            <td>
              <code>font-scale-03</code>
            </td>
            <td>1rem / 16px</td>
          </tr>
          <tr>
            <td>
              <code>font-weight</code>
            </td>
            <td>Placeholder</td>
            <td>
              <code>font-regular</code>
            </td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
      <h3 id="spacing">Spacing</h3>
      <table>
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
              <code>inputMarginTop</code>
            </td>
            <td>Input container</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>inputMarginBottom</code>
            </td>
            <td>Input container</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
        </tbody>
      </table>
      <table>
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
              <code>margin-left</code>
            </td>
            <td>Error icon</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>margin-left</code>
            </td>
            <td>Action</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>margin-left</code>
            </td>
            <td>Prefix</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>padding-right</code>
            </td>
            <td>Prefix</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>
              <code>padding-left</code>
            </td>
            <td>Suffix</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>
              <code>margin-left</code>
            </td>
            <td>Suffix</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>margin-right</code>
            </td>
            <td>Suffix</td>
            <td>
              <code>spacing-4</code>
            </td>
            <td>0.25rem / 4px</td>
          </tr>
          <tr>
            <td>
              <code>padding-left</code>
            </td>
            <td>Input</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>
              <code>padding-right</code>
            </td>
            <td>Input</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>
              <code>padding-left</code>
            </td>
            <td>Input container</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
          <tr>
            <td>
              <code>padding-right</code>
            </td>
            <td>Input container</td>
            <td>
              <code>spacing-8</code>
            </td>
            <td>0.5rem / 8px</td>
          </tr>
        </tbody>
      </table>
      <h3 id="border">Border</h3>
      <table>
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
        </tbody>
      </table>
      <h3 id="width">Width</h3>
      <table>
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
      </table>
      <h3 id="margin">Margin</h3>
      <table>
        <thead>
          <tr>
            <th>Margin</th>
            <th>Value</th>
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
      </table>
      <p>
        And also apply different values to each side of the component:
        <code>top</code> <code>bottom</code> <code>left</code>{" "}
        <code>right</code>
      </p>
      <h2 id="accessibility">Accessibility</h2>
      <h3 id="wcag-2-2">WCAG 2.2</h3>
      <ul>
        <li>
          Understanding WCAG 2.2 -
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships">
            1.3.1: Information and Relationships
          </a>
        </li>
        <li>
          Understanding WCAG 2.2 -
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification">
            3.3.1: Error Identification
          </a>
        </li>
        <li>
          Understanding WCAG 2.2 -
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions">
            3.3.2: Labels and Instructions
          </a>
        </li>
        <li>
          Understanding WCAG 2.2 -
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion">
            3.3.3: Error Suggestion
          </a>
        </li>
        <li>
          Understanding WCAG 2.2 -
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value">
            4.1.2: Name, Role, Value
          </a>
        </li>
      </ul>
      <h2 id="links-and-references">Links and references</h2>
      <ul>
        <li>
          <a href="https://developer.dxc.com/tools/react/next/#/components/textInput">
            React component
          </a>
        </li>
        <li>
          <a href="https://developer.dxc.com/tools/angular/next/#/components/textInput">
            Angular component
          </a>
        </li>
        <li>
          <a href="https://xd.adobe.com/view/a8c4a40a-e4ef-4161-8917-8172a165d626-fd97/">
            Adobe XD component
          </a>
        </li>
      </ul>
      <hr />
      <p>
        <a href="https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/text-input/README.md">
          Edit this page on Github
        </a>
      </p>
    </div>
  );
};

export default TextInputSpecsPage;
