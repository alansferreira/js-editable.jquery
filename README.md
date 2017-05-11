# js-editable
dynamic editable html contents with jquery javascript

## Get started

### HTML header code

```html
<link href="dist/js-editable.min.css" rel="stylesheet">
<script src="dist/js-editable.min.js"></script>
```

## Automatic initialization
```html
<table>
    <tr>
        <td class='editable' data-editable-group='tb1'>cell1</td>
        <td class='editable' data-editable-group='tb1'>cell2</td>
        <td class='editable' data-editable-group='tb1'>cell3</td>
    </tr>
    <tr>
        <td class='editable' data-editable-group='tb1'>cell1</td>
        <td class='editable' data-editable-group='tb1'>cell2</td>
        <td class='editable' data-editable-group='tb1'>cell3</td>
    </tr>
</table>
```


### Manual JQuery initialization 
#### HTML code
```html
<table>
    <tr>
        <td class='editable-cell' data-editable-group='tb1'>cell1</td>
        <td class='editable-cell' data-editable-group='tb1'>cell2</td>
        <td class='editable-cell' data-editable-group='tb1'>cell3</td>
    </tr>
    <tr>
        <td class='editable-cell' data-editable-group='tb1'>cell1</td>
        <td class='editable-cell' data-editable-group='tb1'>cell2</td>
        <td class='editable-cell' data-editable-group='tb1'>cell3</td>
    </tr>
</table>
```

### javascript code
```javascript
$(".editable-cell").editable();
```

