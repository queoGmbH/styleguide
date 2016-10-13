'use strict';

window['jQuery'] = require('jquery');
window['$'] = window['jQuery'];
window['Util'] = require('exports?Util!bootstrap/js/dist/util');
require('bootstrap/js/dist/collapse');

window['styleguide'] = window.styleguide || new function () {
        var instances = {};

        this.init = function(){
            loadModule('sidebar', '[data-toggle=sidebar]');
        };

        this.getInstance = function(name, selector) {
            return instances[name][selector.toString()];
        };

        this.getInstanceCollection = function(name) {
            return instances[name]
        };

        var loadModule = function (name, selector) {
            var $target = $(selector);
            if( $target.length ) {
                var module = require('./modules/'+name);
                instances[name] = {};
                instances[name][selector.toString()] = new module($target);
            }
        }
    };

window.styleguide.init();
