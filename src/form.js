import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators:{
        'in-between-spaces': function(value){
            return !value.includes(' ')
        },
    }

}

Vue.use(VueForm, options)