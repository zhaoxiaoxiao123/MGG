import Vue from 'vue'

// 千位符正则解析
Vue.filter('formatPrice', function (value) { 
  let res;
  if (value.toString().indexOf('.') === -1) {
    res = value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') + '.00'
  } else { 
    let prev = value.toString().split('.')[0];
    let next = value.toString().split('.')[1];
    res = prev.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') +'.'+ next;
  }
  
  return res

})