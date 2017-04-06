import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {

        let promise = this.store.findAll('post');

        return promise;
    }
});