document.querySelector('.click').addEventListener('click', () => {
  let hexColor1 = '';
  let hexColor2 = '';
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
  '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let index = 0;

  for (let i = 0; i < 6; i++){
    index = Math.floor(Math.random() * hex.length);
    hexColor1 += hex[index];
    index = Math.floor(Math.random() * hex.length);
    hexColor2 += hex[index];
  } 

  document.querySelector('body').style.background=`linear-gradient(to right, 
    #${hexColor1}, #${hexColor2})`;
  document.querySelector('body > h1').style.color="#ffffff";
  document.querySelector('body > p').style.color="#ffffff";
  document.querySelector('.hex1').innerText=`#${hexColor1}`;
  document.querySelector('.hex2').innerText=`#${hexColor2}`;
});
