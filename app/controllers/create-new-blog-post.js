import Ember from 'ember';

export default Ember.Controller.extend({
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        createBlogPost: function(e) {
            e.preventDefault();

            let newPost = this.store.createRecord('post', {
                title: this.get('title'),
                text: this.get('content'),
                imgUrl: this.get('imgUrl')
            });

            newPost.save().then(() => {
                this.transitionToRoute('index');
            }, function() {
                alert('error');
            }, function() {

            });


        }
    }
});