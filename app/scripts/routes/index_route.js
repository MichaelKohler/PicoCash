PicoCash.IndexRoute = Ember.Route.extend({
   beforeModel: function() {
       this.transitionTo('transactions');
   }
});