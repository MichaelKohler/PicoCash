PicoCash.TransactionsNewRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('transaction');
    },

    afterModel: function(transition) {
        var transactionNewController = this.controllerFor('transactions.new');
        if(Ember.isEmpty(transactionNewController.get('categories'))) {
            this.store.find('category').then(function(categories) {
                transactionNewController.set('categories', categories);
            });
        }
    }
});