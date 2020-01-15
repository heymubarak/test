import Vue from 'vue'


const filter = [
  Vue.filter('upperCase', function (value) {
    return `${value.toUpperCase()}`;
  }),
  
  Vue.filter('roundOff', function (value){
    return `${value.toFixed(2)}`
  })
]

export default filter;