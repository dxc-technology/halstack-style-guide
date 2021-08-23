# Upload

The upload component is used to choose files from any location in the local machine and update those files to the server where the application is hosted. It is a common procedure in applications where files are required like documents, images or other information in digital formats.

## Usage

* Provide a meaninful label and helper text in order to help the user understand the files expected
* When displaying errors, provide feedback about the type of error using the error message
* When the upload process fails, provide useful information instead of showing an error message using technical or undetermined information (i.e '0x94 ERROR_PATH_BUSY')

## States

The component upload is made-up of an input (type: file) and a file-item(s).

### Input-file

The element has the following states: **Enabled**, **hover**, **focus**, **active**, **error**, **dragover** and **disabled**.

![Input-file upload states](images/upload_states_input.png)

_Input-file upload states_

### File items

The element has the following states: **Enabled**, **hover/focus**, **active**, **loading** and **error**.

![File item states](images/upload_states_file.png)

_File item states_

## Anatomy

![Component upload anatomy](images/upload_anatomy.png)

1. Label
2. Drag and drop area
3. Error message
4. Error indicator
5. Action - Remove file
6. Helper text
7. Upload button
8. File name
9. Loading indicator
10. File item container
## Loading content

When handling with large file sizes the file item should provide feedback to the user about the loading state. While the file is being loaded, the action to remove the file can not be performed.

![Loading content example](images/upload_loading.png)

_Loading content state_

## Design Specifications

![Upload design specifications](images/upload_specs.png)

_Upload design specifications_




## Links and references

* [Angular component]()
* [React component]()

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/upload/README.md)
