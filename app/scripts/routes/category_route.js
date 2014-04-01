PicoCash.CategoryRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('category', params.category_id);
    },

    afterModel: function(transition) {
        var categoryController = this.controllerFor('category');
        if(Ember.isEmpty(categoryController.get('transactions'))) {
            this.store.find('transactions').then(function(transactions) {
                categoryController.set('transactions', transactions);
            });
        }
    }
});