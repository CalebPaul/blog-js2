import Ember from 'ember';

export default Ember.Route.extend({
  formStatus: Ember.inject.service(),
  model() {
    return this.store.findAll('post');
  },
  actions: {
    saveNewPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },

    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      console.log("admin.js: "+post);
      post.save();
      this.transitionTo('admin');
    }

  }
});
