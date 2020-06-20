var vm1 = new Vue({
  el: '#app',
  data: {
    status: 'Critical'
  },
  template: '<p>Server Status {{ status }} </p>'
});