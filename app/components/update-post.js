import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm(post) {
      console.log("updatePostFormTest");
      this.set('updatePostForm', true);
    },

    updatePost(post) {
      var params = {
        title: this.get('update_title'),
        imageFeature: this.get('update_imageFeature'),
        imageContent: this.get('update_imageContent'),
        teaser: this.get('update_teaser'),
        content: this.get('update_content'),
        //timestamp: this.get('timestamp'),
        author: this.get('update_author'),
      };
      this.set('updatePostForm', false);
      console.log("update-post: "+post);
      this.sendAction('updatePost', post, params);
    }
  }
});
