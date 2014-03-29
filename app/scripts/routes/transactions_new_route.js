PicoCash.TransactionsNewRoute = Ember.Route.extend({
    model: function() {
        return {};
    },

    afterModel: function(transition) {
        var transactionNewController = this.controllerFor('transactions.new');
        transactionNewController.set('model', {});
        if(Ember.isEmpty(transactionNewController.get('categories'))) {
            this.store.find('category').then(function(categories) {
                transactionNewController.set('categories', categories);
            });
        }
    }
});