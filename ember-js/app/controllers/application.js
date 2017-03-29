import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set('events', Ember.A([]));
  },

  events: null,

  actions: {
    'ember-action'() {
      this.get('events').pushObject('Fired an Ember action!');
    }
  }
});
