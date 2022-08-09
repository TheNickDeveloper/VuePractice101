# Vue.js - V-model binding by using input-box
 
>You can use the v-model directive to create two-way data bindings on form input, textarea, and select elements. It automatically picks the correct way to update the element based on the input type. - Vue.js, 2022

As mentioned from above, v-model can be used as real time two way data binding between JavaScript and HTML file. Please find example below as Checkboxes and Select practice:

```html
<!-- Binding displayLabels, monitoring checkbox status -->
<div class="form-check">
    <input v-model="displayLabels" class="form-check-input" id="showLabels" type="checkbox">
    <label class="form-check-label" for="showLabels">
        show labels
    </label>
    <div>Display labels? {{displayLabels}}</div>
</div>
```
<p align = "center">code - HTML file_checkbox binding</p>

<br/>

```html
<!-- Binding my checkboxes, monitoring checkbox value-->
<div class="form-check">
    <input v-model="myCheckboxes" class="form-check-input" id="cb1" value="1" type="checkbox">
    <label class="form-check-label" for="checkboxes1">
        First
    </label>
</div>
<div class="form-check">
    <input v-model="myCheckboxes" class="form-check-input" id="cb2" value="2" type="checkbox">
    <label class="form-check-label" for="checkboxes2">
        Second
    </label>
</div>
<div class="form-check">
    <input v-model="myCheckboxes" class="form-check-input" id="cb2" value="3" type="checkbox">
    <label class="form-check-label" for="checkboxes3">
        Third
    </label>
</div>
<div>checked boxes:{{myCheckboxes}}</div>
```
<p align = "center">code - HTML file_multiple checkbox with value

<br/>

```html
<div id="multOptions">
    <h3>Multiple Options</h3>
    <select v-model="myMultiple" multiple class="form-select">
        <option selected value="no value">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
    <div class="form-text">Chosen:{{myMultiple}}</div>
</div>
```
<p align = "center">code - HTML file_multiple select</p>

<br/>

```html
<select v-model="myDynamic" class="form-select">
    <option selected value="no value">Choose...</option>
    <option v-for="option in myOptions":value="option.value">
        {{option.text}}
    </option>
</select>
<div class="form-text">Chosen:{{myDynamic}}</div>
```
<p align = "center">code - HTML file_dynamic select with js binding</p>