PicoCash.CategoriesController = Ember.ArrayController.extend({
    actions: {
        deleteCategory: function(categoryID) {
            this.store.find('category', categoryID).then(function (categoryToDelete) {
                console.log(categoryToDelete._data.name + " will be deleted!");
                categoryToDelete.deleteRecord();
                categoryToDelete.save();
            });
        }
    }
});