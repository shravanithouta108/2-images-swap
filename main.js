function swap()
{
  var x=document.getElementById('a');
  var y=document.getElementById('b');
  
 // swap code
 var temp;
 temp=x.src;
 x.src=y.src;
 y.src=temp;
}
