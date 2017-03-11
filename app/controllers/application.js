import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service()
  spinner: Ember.inject.service('spinner'),
  checkingAuths: function() {
        return localStorage.token ? true : false;
    }.property(),
  actions:{
    logout: function() {

            localStorage.removeItem('token');

            window.location.reload(true);
            this.transitionToRoute('index');
        },
    transition: function(args){
      this.transitionToRoute(args);
    },
    hreftransition : function(args){
      window.open(args)
    }
  }
});
