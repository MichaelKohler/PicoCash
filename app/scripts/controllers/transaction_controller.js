PicoCash.TransactionsController = Ember.ArrayController.extend({
    modelCount: Ember.computed.alias('content.length'),

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