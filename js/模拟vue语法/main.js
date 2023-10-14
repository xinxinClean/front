var MyVue = require('./myvue');
new MyVue({
    'el':'#app',
    getter:function () {
        return this.el;
    }
})