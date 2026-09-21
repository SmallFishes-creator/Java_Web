//悬浮选中效果
let float_focus = document.querySelectorAll('tr');
for(let i=1;i<float_focus.length;i++){
  float_focus[i].addEventListener('mouseover',function(){
    this.style.backgroundColor = '#e7e7e7';
  })
}
for(let i=1;i<float_focus.length;i++){
  float_focus[i].addEventListener('mouseout',function(){
    this.style.backgroundColor = '#ffffff';
  })
}