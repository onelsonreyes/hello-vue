new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('¡Alerta!')
            },
            downMethod: function(event) {
                this.value = event.target.value;                
            },
            enterMethod: function (event) {
                this.value = event.target.value;                
            }
        }
    });