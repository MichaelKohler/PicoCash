PicoCash.Transaction = DS.Model.extend({
    id:             DS.attr(),
    name:           DS.attr(),
    amount:         DS.attr(),
    creationDate:   DS.attr(),
    category:       DS.attr()
});