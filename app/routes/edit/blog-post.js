import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {

        var postID = params.id;
        var promise = this.store.findRecord('post', postID)

        return promise
    }
});