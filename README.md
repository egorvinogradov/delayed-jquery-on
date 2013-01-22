jquery-on-delay
===============

jQuery.on/off extension running handlers by timeout.

#### Usage:
```
element.delayedOn(<delay>, <events>, <handler>, <context>);
element.delayedOff(<events>, <handler>);
```

#### Example:
```javascript
// Running openMenu in 500ms after 'mouseover' event fires
$('.block').delayedOn(500, 'mouseover', openMenu, this);
```

#### Example:
```javascript
// Unbinding openMenu from 'mouseover' event
$('.block').delayedOff('mouseover', openMenu);

// Unbinding all handlers bound to 'mouseover' event via jQuery.onDelay
$('.block').delayedOff('mouseover');
```
