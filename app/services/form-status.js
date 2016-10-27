import Ember from 'ember';

export default Ember.Service.extend({
  values: [],

  add(value) {
    this.get('values').pushObject(value);
  }
});
