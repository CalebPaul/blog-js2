import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  imageFeature: DS.attr(),
  imageContent: DS.attr(),
  teaser: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  author: DS.attr()
});
