PicoCash.TransactionsController = Ember.ArrayController.extend({
    actions: {
        deleteTransaction: function(transactionID) {
            this.store.find('transaction', transactionID).then(function (transactionToDelete) {
                console.log(transactionToDelete._data.name + " will be deleted!");
                transactionToDelete.deleteRecord();
                transactionToDelete.save();
            });
        }
    }
});