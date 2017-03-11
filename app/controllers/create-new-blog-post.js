import Ember from 'ember';

export default Ember.Controller.extend({
  checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
  actions: {
    createBlogPost: function(e) {
      e.preventDefault();
      var title=this.get('title');
      var text=this.get('content');
      var imgUrl = this.get('imgUrl');

      var promise = Ember.$.ajax({
        type: 'post',
        url: 'https://paper-blog-api.herokuapp.com',
        headers: {
          'x-access-token': localStorage.token
        },
        data: {
          title: title,
          text: text,
          imgUrl: imgUrl
        }
      });

      promise.then(() => {
        this.transitionToRoute('index');
      }, function(){
        alert('error');
      },function(){

      });

    }
  }
});
