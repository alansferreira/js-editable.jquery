try {
    
    if(!(require && module && module.exports)) return null;
    if(!(window && window.$ && window.jQuery)) window.$ = window.jQuery = require('jquery');
    
    module.exports = require('./js-editable.jquery');
    
} catch (error) {
    
}
