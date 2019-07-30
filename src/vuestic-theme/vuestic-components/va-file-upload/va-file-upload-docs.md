```html
<va-file-upload
  v-model="gallery"
  type="gallery"
  dropzone
/>
```

**Props**

* `value` - Array - array of uploaded files. Required prop
* `type` - String (default: 'list') - Switch the displaying of file upload ( Possible values:
 
 'list' - List of files under the button
 
 'gallery' - List of previews
 
 'single' - Possible to upload only one file
 )
 
 * `dropzone` - Boolean (default: false) - Turn on/off drag'n'drop area around the main button
 * `fileTypes` - String - list of file types, that can be uploaded (for example '.png, .jpg, .jpeg, .gif')
 
