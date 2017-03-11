import Ember from 'ember';

export default Ember.Route.extend({
  spinner: Ember.inject.service('spinner'),
});
