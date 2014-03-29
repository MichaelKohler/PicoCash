PicoCash.TransactionsNewController = Ember.ObjectController.extend({

    actions: {
        saveTransaction: function() {
            var selectedCategoryID = document.querySelector('#category').value;
            var that = this;
            this.store.find('category', selectedCategoryID).then(function (selectedCategory) {
                that.send('createRecord', selectedCategory);
            });
        },
        createRecord: function(selectedCategory) {
            console.log('createRecord: ' + this.store);
            this.store.createRecord('transaction', {
                name: this.get('name'),
                amount: parseFloat(this.get('amount')),
                createDate: Date.now(),
                category: selectedCategory
            });
            this.transitionToRoute('transactions.index');
        }
    }
});