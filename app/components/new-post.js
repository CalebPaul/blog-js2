import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewPost() {
          debugger; 
      var params = {

        title: this.get('title'),
        imageFeature: this.get('imageFeature'),
        imageContent: this.get('imageContent'),
        teaser: this.get('teaser'),
        content: this.get('content'),
        timestamp: this.get('timestamp'),
        author: this.get('author')
      };
      this.sendAction('saveNewPost', params);
    }
  }
});
