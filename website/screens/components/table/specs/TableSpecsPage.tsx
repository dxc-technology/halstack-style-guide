import {
  DxcTable,
  DxcStack,
  DxcText,
  DxcList,
  DxcLink,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import anatomyImage from "./images/table_anatomy.png";
import specsImage from "./images/table_specs.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const TableSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Table design specifications">
          <Image src={specsImage} alt="Table design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          Some other components defined in the design system are used in the
          table component as the{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/checkbox"
            text="checkbox"
            newWindow
          />
          ,{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/button"
            text="button"
            newWindow
          />{" "}
          or{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/select"
            text="select"
            newWindow
          />
          . For concrete specifications about states, please, consider to see
          the documentation of each component.
        </DxcText>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Figure caption="Table component anatomy">
          <Image src={anatomyImage} alt="Table component anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Header</DxcText>
          <DxcText>Header title</DxcText>
          <DxcText>Sorting action</DxcText>
          <DxcText>Body</DxcText>
          <DxcText>Cell</DxcText>
          <DxcText>Cell value</DxcText>
          <DxcText>Paginator</DxcText>
        </DxcList>
      </DxcStack>
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
                <code>dataBackgroundColor</code>
              </td>
              <td>Cell</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>dataFontColor</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>headerBackgroundColor</code>
              </td>
              <td>Header</td>
              <td>
                <code>color-purple-700</code>
              </td>
              <td>#5f249f</td>
            </tr>
            <tr>
              <td>
                <code>headerFontColor</code>
              </td>
              <td>Header title</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>scrollBarThumbColor</code>
              </td>
              <td>Scroll bar</td>
              <td>
                <code>color-grey-700</code>
              </td>
              <td>#666666</td>
            </tr>
            <tr>
              <td>
                <code>scrollBarTrackColor</code>
              </td>
              <td>Scroll bar</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>sortIconColor</code>
              </td>
              <td>Sort</td>
              <td>
                <code>color-white</code>
              </td>
              <td>#ffffff</td>
            </tr>
            <tr>
              <td>
                <code>rowSeparatorColor</code>
              </td>
              <td>Divider</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
          </tbody>
        </DxcTable>
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
                <code>dataFontFamily</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <code>dataFontSize</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>dataFontStyle</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>dataFontWeight</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>dataFontTextTransform</code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <code>dataTextLineHeight</code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>dataTextAlign</code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>left</td>
            </tr>
            <tr>
              <td>
                <code>headerFontFamily</code>
              </td>
              <td>Header title</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>&#39;Open Sans&#39;, sans-serif</td>
            </tr>
            <tr>
              <td>
                <code>headerFontSize</code>
              </td>
              <td>Header title</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>headerFontStyle</code>
              </td>
              <td>Header title</td>
              <td>
                <code>font-style-normal</code>
              </td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>headerFontWeight</code>
              </td>
              <td>Header title</td>
              <td>
                <code>font-weight-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>headerFontTextTransform</code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>none</td>
            </tr>
            <tr>
              <td>
                <code>headerTextLineHeight</code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>normal</td>
            </tr>
            <tr>
              <td>
                <code>headerTextAlign</code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>left</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <code>rowSeparatorThickness</code>
              </td>
              <td>Divider</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>rowSeparatorStyle</code>
              </td>
              <td>Divider</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>headerBorderRadius</code>
              </td>
              <td>Header</td>
              <td>
                <code>border-radius-medium</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Spacing</HeadingLink>
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
                <code>dataPaddingTop</code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>14px</td>
            </tr>
            <tr>
              <td>
                <code>dataPaddingBottom</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>spacing-12</code>
              </td>
              <td>0.75rem / 12px</td>
            </tr>
            <tr>
              <td>
                <code>dataPaddingRight</code>
              </td>
              <td>Cell value</td>
              <td>-</td>
              <td>20px</td>
            </tr>
            <tr>
              <td>
                <code>dataPaddingLeft</code>
              </td>
              <td>Cell value</td>
              <td>
                <code>spacing-40</code>
              </td>
              <td>2.5rem / 40px</td>
            </tr>
            <tr>
              <td>
                <code>headerPaddingTop</code>
              </td>
              <td>Header title</td>
              <td>
                <code>spacing-16</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>headerPaddingBottom</code>
              </td>
              <td>Header title</td>
              <td>
                <code>spacing-16</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>headerPaddingRight</code>
              </td>
              <td>Header title</td>
              <td>-</td>
              <td>20px</td>
            </tr>
            <tr>
              <td>
                <code>headerPaddingLeft</code>
              </td>
              <td>Header title</td>
              <td>
                <code>spacing-40</code>
              </td>
              <td>2.5rem / 40px</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Iconography</HeadingLink>
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
              <td>Width</td>
              <td>Sorting action</td>
              <td>-</td>
              <td>14px</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>Sorting action</td>
              <td>-</td>
              <td>14px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships"
              text="Success Criterion 1.3.1: Info and Relationships"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence"
              text="Success Criterion 1.3.2: Meaningful Sequence"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard"
              text="Success Criterion 2.1.1: Keyboard"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order"
              text="Success Criterion 2.4.3: Focus Order"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels"
              text="Success Criterion 2.4.6: Headings and Labels"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible"
              text="Success Criterion 2.4.7: Focus Visible"
              newWindow
            />
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
              text="Success Criterion 4.1.2: Name, Role, Value"
              newWindow
            />
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI-ARIA</HeadingLink>
        <DxcList>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/#table"
              text="3.23 Table"
              newWindow
            />
          </DxcText>
          <DxcText>
            WAI-ARIA Authoring Practices 1.2 -{" "}
            <DxcLink
              href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/table/sortable-table.html"
              text="Sortable Table Example"
              newWindow
            />
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/table/specs/TableSpecsPage.tsx" />
    </DxcStack>
  );
};

export default TableSpecsPage;
