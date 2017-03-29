import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  // We must define any custon events that Ember should be able to
  // listen to
  customEvents: {
    // 'name use by skate': 'name used within Ember'
    'event-from-skate': 'skateEvent'
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
