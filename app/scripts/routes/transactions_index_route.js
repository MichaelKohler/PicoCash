PicoCash.TransactionsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('transaction');
    }
});