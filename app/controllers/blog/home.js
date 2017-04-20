import Ember from 'ember';

export default Ember.Controller.extend({
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        delete: function(post) {

            post.destroyRecord()

        }
    }
});