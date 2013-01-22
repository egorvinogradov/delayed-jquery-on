jquery-on-delay
===============

jQuery.on/off extension running handlers by timeout.

#### Usage:
```
element.onDelay(<delay>, <events>, <handler>, <context>);
element.offDelay(<events>, <handler>);
```

#### Example:
```javascript
$('.block').onDelay(500, 'mouseover', openMenu, this); // runs openMenu in 500ms after 'mouseover' event fires
```

#### Example:
```javascript
$('.block').offDelay('mouseover', openMenu); // unbinds openMenu from 'mouseover' event
$('.block').offDelay('mouseover'); // unbinds all handlers bound to 'mouseover' event via jQuery.onDelay
```
