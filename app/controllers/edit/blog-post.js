import Ember from 'ember';

export default Ember.Controller.extend({
    // text: function() {
    //     return this.get('model.text')

    // },
    // text: Ember.computed.alias('model.text'),
    checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
    actions: {
        editBlogPost: function(model) {
            event.preventDefault();
            model.save();
        }
    }
});