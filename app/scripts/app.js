var PicoCash = window.PicoCash = Ember.Application.create({
    LOG_TRANSITIONS: true
});

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

PicoCash.Router.map(function() {
    this.route("transactions");
    this.route("newTransaction");
    this.route("categories");
});

Ember.Handlebars.registerBoundHelper('formatDate', function(date){
    return new Date(date).toLocaleString();
});

Ember.Handlebars.registerBoundHelper('formatAmount', function(number){
    return number.toFixed(2).toLocaleString();
});