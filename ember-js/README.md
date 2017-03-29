# ember-js

## What is it?

[`Ember.js`][ember-js] is a framework for developing "single page applications". It has a great developer experience and, once learned, can be used to effectively build large, complex, data-driven applications.

## When would I use Skate with Ember?

Ember has it's own method of building powerful components. However, it does not generate "web components" of the same type as Skate. Skate works with the browser's native `customElements.define` API, which allows your custom code to be treated the same as a native element like `<a>` or `<div>`.  Ember's components only work with Ember applications.

If you end up in a situation where you need to share components across teams, where they all do not necessarily use Ember, Skate can be a great tool for creating these components.

## How do I use this?

### Generating an Ember Application

```bash
npm install -g ember-cli
ember new my-application
```

### Working with Skate

To get Ember and Skate working together, there are a few small steps that you'll need to take

#### 1. Include Skate and the WebComponents polyfill

There are a number of ways to do this, but the easiest (for me) was adding the scripts directly to `app/index.html`

```html
<script src="https://unpkg.com/skatejs-web-components@5.1.0/dist/index.min.js"></script>
<script src="https://unpkg.com/skatejs@4.6.6/dist/index-with-deps.js"></script>
```

#### 2. Include your Skate Component

In this example, I use Ember's build system to include the Skate component in my application.

1. Create the "production" version of your Skate component
2. Copy into `vendor`
3. Import through `ember-cli-build.js`:
  ```javascript
  app.import('vendor/my-cool-component.bundle.min.js', { prepend: true });
  ```

Alternatively, if you host your Skate components on a server or CDN, you can add another `<script>` tag linking to it, right next to the two we added in step 1.

***

This is as far as you need to go if you only need to display your Skate elements.  However, if you want to bind an Ember Action to an event emitted by Skate, there is one more step

#### 3. (Optional) Define custom events

If your Skate components emit custom events, you'll need to let Ember know about them.  This is because, while Ember's `action` helper allows you to specify an event to bind to, it checks against a whitelist of valid browser events. You an extend this list, however, with your own events:

```javascript
// app/app.js
App = Ember.Application.extend({
  customEvents: {
    // 'name use by skate': 'name used within Ember'
    'event-from-skate': 'skateEvent'
  }
});
```

In the above example, if your Skate component does something like

```javascript
emit(this, 'event-from-skate');
```

Ember can capture that event using the name `skateEvent`

```hbs
<my-cool-component {{action 'some-ember-action' on='skateEvent'}}></my-cool-component
```

Now, `some-ember-action` will be invoked when the `event-from-skate` is emitted by your Skate component.

[ember-js]: https://github.com/emberjs/ember.js
