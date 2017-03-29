import Ember from 'ember';

export default Ember.Controller.extend({
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        editBlogPost: function(model) {

            model.save().then(() => {
                this.transitionToRoute('index')
            });
        }
    }
});