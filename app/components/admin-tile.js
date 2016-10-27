import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    // updatePostForm() {
    //   this.set('updatePostForm', true);
    // },

    showPostForm(post){
      console.log("in showPostForm");
      this.sendAction('updatePostForm', post);
      // this.set('updatePostForm', true);
    },

    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    updatePost(post, params) {
      console.log("admin-tile.js: "+post);
      this.sendAction('updatePost', post, params);
    }

  }
});
