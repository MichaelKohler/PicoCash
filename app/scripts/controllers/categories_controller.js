PicoCash.CategoriesController = Ember.ArrayController.extend({
    actions: {
        deleteCategory: function(categoryID) {
            this.store.find('category', categoryID).then(function (categoryToDelete) {
                console.log(categoryToDelete._data.name + " will be deleted!");
                categoryToDelete.deleteRecord();
                categoryToDelete.save();
            });
        },
        saveCategory: function() {
            this.store.createRecord('category', {
                name: this.get('name'),
                color: this.get('color')
            });
            this.send('resetFields');
        },
        resetFields: function() {
            this.set('name', '');
            this.set('color', '');
        }
    }
});