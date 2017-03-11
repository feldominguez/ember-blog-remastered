import Ember from 'ember';

export default Ember.Controller.extend({
  checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
      delete: function(post){
        // post.preventDefault();

        var promise = Ember.$.ajax({
          type: 'DELETE',
          url: 'https://paper-blog-api.herokuapp.com/blog/' + post,
          headers: {
            'x-access-token': localStorage.token
          }
        });

        promise.then(()=> {
          window.location.reload(true);
        });

      }
    }
});
