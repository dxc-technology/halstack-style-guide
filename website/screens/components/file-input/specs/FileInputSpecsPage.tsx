import Image from "@/common/Image";
import fileInputStatesFile from "./images/input_file_states_file.png";
import fileInputStatesFiledrop from "./images/input_file_states_filedrop.png";
import fileInputStatesDropzone from "./images/input_file_states_dropzone.png";
import fileInputStatesFileItem from "./images/input_file_states_fileitem.png";
import fileInputAnatomy from "./images/input_file_anatomy.png";
import fileInputFileFileItemPreview from "./images/input_file_fileitem_preview.png";
import fileInputFileSingleFile from "./images/input_file_single_file.png";
import fileInputSpecs from "./images/input_file_specs.png";
import HeadingLink from "../../../common/HeadingLink";
import {
  DxcStack,
  DxcText,
  DxcList,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const FileInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="File input design specifications">
          <Image src={fileInputSpecs} alt="File input design specifications" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The component file input is made-up of an input (type: file) and a
          file-item(s).
        </DxcText>
        <HeadingLink level={4}>File</HeadingLink>
        <DxcText as="p">
          The element has the following states: <strong>Enabled</strong>,{" "}
          <strong>hover</strong>, <strong>focus</strong>,{" "}
          <strong>active</strong> and <strong>disabled</strong>.
        </DxcText>
        <Figure caption="File variant states">
          <Image src={fileInputStatesFile} alt="File variant states" />
        </Figure>
        <HeadingLink level={4}>Filedrop</HeadingLink>{" "}
        <DxcText as="p">
          The element has the following states: <strong>Enabled</strong>,{" "}
          <strong>hover</strong>, <strong>focus</strong>,{" "}
          <strong>active</strong>, <strong>dragover</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Filedrop variant states">
          <Image src={fileInputStatesFiledrop} alt="Filedrop variant states" />
        </Figure>
        <HeadingLink level={4}>Dropzone</HeadingLink>
        <DxcText as="p">
          The element has the following states: <strong>Enabled</strong>,{" "}
          <strong>hover</strong>, <strong>focus</strong>,{" "}
          <strong>active</strong>, <strong>dragover</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Dropzone variant states">
          <Image src={fileInputStatesDropzone} alt="Dropzone variant states" />
        </Figure>
        <HeadingLink level={4}>File items</HeadingLink>
        <DxcText as="p">
          The element has the following states: <strong>Enabled</strong>,{" "}
          <strong>hover/focus</strong>, <strong>active</strong>,{" "}
          <strong>loading</strong> and <strong>error</strong>.
        </DxcText>
        <Figure caption="File item states">
          <Image src={fileInputStatesFileItem} alt="File item states" />
        </Figure>
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={fileInputAnatomy} alt="Component file input anatomy" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Drag and drop area</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Error indicator</DxcText>
          <DxcText>Action - Remove file</DxcText>
          <DxcText>Helper text</DxcText>
          <DxcText>file input button</DxcText>
          <DxcText>File preview</DxcText>
          <DxcText>File name</DxcText>
          <DxcText>File item container</DxcText>
        </DxcList>
        <HeadingLink level={3}>File item with preview</HeadingLink>
        <DxcText as="p">
          When the files to upload are mainly images, the preview can provide
          more feedback to the user rather than the name of the file, preventing
          errors loading content.
        </DxcText>
        <Figure caption="File item with preview example">
          <Image
            src={fileInputFileFileItemPreview}
            alt="File item with preview example"
          />
        </Figure>
        <HeadingLink level={3}>Single-file file input</HeadingLink>
        <DxcText as="p">
          In order to provide a compact version of the file input component to
          accommodate any layout restriction, the variant file displays the file
          name in the same row instead of growing vertically.
        </DxcText>
        <Figure caption="Variant file single">
          <Image src={fileInputFileSingleFile} alt="Variant file single" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Design tokens</HeadingLink>
        <HeadingLink level={4}>Color</HeadingLink>
        <HeadingLink level={5}>Base</HeadingLink>
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
                <code>dropBorderColor</code>
              </td>
              <td>Drag and drop area</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>fileItemBorderColor</code>
              </td>
              <td>File item</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>fileItemIconColor</code>
              </td>
              <td>File item</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>fileNameFontColor</code>
              </td>
              <td>File name</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
            <tr>
              <td>
                <code>filePreviewBackgroundColor</code>
              </td>
              <td>File preview</td>
              <td>
                <code>color-color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>filePreviewIconColor</code>
              </td>
              <td>File preview icon</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
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
                <code>dropLabelFontColor</code>
              </td>
              <td>Drop label</td>
              <td>
                <code>color-black</code>
              </td>
              <td>#000000</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={5}>Interactive</HeadingLink>
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
                <code>disabledDropLabelFontColor</code>
              </td>
              <td>Drop label:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>focusDropBorderColor</code>
              </td>
              <td>Dnd border:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>disabledDropBorderColor</code>
              </td>
              <td>Dnd border:disabled</td>
              <td>
                <code>color-grey-500</code>
              </td>
              <td>#999999</td>
            </tr>
            <tr>
              <td>
                <code>dragoverDropBackgroundColor</code>
              </td>
              <td>Dnd fill:dragover</td>
              <td>
                <code>color-blue-50</code>
              </td>
              <td>#f5fbff</td>
            </tr>
            <tr>
              <td>
                <code>hoverFileItemIconBackgroundColor</code>
              </td>
              <td>File item icon:hover</td>
              <td>
                <code>color-grey-100</code>
              </td>
              <td>#f2f2f2</td>
            </tr>
            <tr>
              <td>
                <code>focusFileItemIconBackgroundColor</code>
              </td>
              <td>File item icon:focus</td>
              <td>
                <code>color-blue-600</code>
              </td>
              <td>#0095ff</td>
            </tr>
            <tr>
              <td>
                <code>activeFileItemIconBackgroundColor</code>
              </td>
              <td>File item icon:active</td>
              <td>
                <code>color-grey-300</code>
              </td>
              <td>#cccccc</td>
            </tr>
            <tr>
              <td>
                <code>errorFileItemBorderColor</code>
              </td>
              <td>File item container:error</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
            <tr>
              <td>
                <code>errorFileItemBackgroundColor</code>
              </td>
              <td>File item container:error</td>
              <td>
                <code>color-red-50</code>
              </td>
              <td>#fff5f6</td>
            </tr>
            <tr>
              <td>
                <code>errorFilePreviewBackgroundColor</code>
              </td>
              <td>File item preview:error</td>
              <td>
                <code>color-red-200</code>
              </td>
              <td>#ffccd3</td>
            </tr>
            <tr>
              <td>
                <code>errorMessageFontColor</code>
              </td>
              <td>File item:error</td>
              <td>
                <code>color-red-700</code>
              </td>
              <td>#d0011b</td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Typography</HeadingLink>
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
                <code>font-family</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-bold</code>
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td>
                <code>line-height</code>
              </td>
              <td>Label</td>
              <td>
                <code>font-leading-loose-01</code>
              </td>
              <td>1.75em</td>
            </tr>
            <tr>
              <td>
                <code>font-family</code>
              </td>
              <td>File item</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>File item</td>
              <td>
                <code>font-scale-02</code>
              </td>
              <td>0.875rem / 14px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>File item</td>
              <td>
                <code>font-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>line-height</code>
              </td>
              <td>File item</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>font-family</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-scale-01</code>
              </td>
              <td>12px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>line-height</code>
              </td>
              <td>Helper text</td>
              <td>
                <code>font-leading-normal</code>
              </td>
              <td>1.5em</td>
            </tr>
            <tr>
              <td>
                <code>font-family</code>
              </td>
              <td>Drop label</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
            <tr>
              <td>
                <code>font-size</code>
              </td>
              <td>Drop label</td>
              <td>
                <code>font-scale-03</code>
              </td>
              <td>1rem / 16px</td>
            </tr>
            <tr>
              <td>
                <code>font-weight</code>
              </td>
              <td>Drop label</td>
              <td>
                <code>font-regular</code>
              </td>
              <td>400</td>
            </tr>
            <tr>
              <td>
                <code>font-family</code>
              </td>
              <td>Error message</td>
              <td>
                <code>font-family-sans</code>
              </td>
              <td>Open Sans</td>
            </tr>
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
                <code>font-regular</code>
              </td>
              <td>400</td>
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
          </tbody>
        </DxcTable>
        <HeadingLink level={4}>Border</HeadingLink>
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
                <code>border-style</code>
              </td>
              <td>Drag and drop area</td>
              <td>
                <code>border-style-dashed</code>
              </td>
              <td>dashed</td>
            </tr>
            <tr>
              <td>
                <code>border-width</code>
              </td>
              <td>Drag and drop area</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>Drag and drop area</td>
              <td>
                <code>border-radius-large</code>
              </td>
              <td>0.375rem / 6px</td>
            </tr>
            <tr>
              <td>
                <code>border-style</code>
              </td>
              <td>File item</td>
              <td>
                <code>border-style-solid</code>
              </td>
              <td>solid</td>
            </tr>
            <tr>
              <td>
                <code>border-width</code>
              </td>
              <td>File item</td>
              <td>
                <code>border-width-1</code>
              </td>
              <td>1px</td>
            </tr>
            <tr>
              <td>
                <code>border-radius</code>
              </td>
              <td>File item</td>
              <td>
                <code>border-radius-medium</code>
              </td>
              <td>0.25rem / 4px</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>File item icon:focus</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
            <tr>
              <td>
                <code>box-shadow</code>
              </td>
              <td>Drag and drop area:dragover</td>
              <td>
                <code>-</code>
              </td>
              <td>0 0 0 2px</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/file-input/specs/FileInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default FileInputSpecsPage;
