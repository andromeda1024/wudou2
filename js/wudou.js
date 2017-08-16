Vue.component('wd-app',{
    template: '{{message}}',
    props: ['message']
});

var root = new Vue({
    el: '#root',
    data: {
        message: 'Hello world'
    }
})