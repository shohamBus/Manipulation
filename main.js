window.addEventListener('load', function(){
    let block=document.getElementById('block')
    let scaleCoef=1;
    let rotateDeg=0;



    //pos y manipulation

    let posY=document.getElementById('pos-y')
    posY.addEventListener('input',function(){
        block.style.top=posY.value + 'px';
    });

    //pos x manipulation

    let posX=document.getElementById('pos-x')
    posX.addEventListener('input',function(){
        block.style.left=posX.value + 'px';
    });

     //size manipulation

     let size=document.getElementById('size')
     size.addEventListener('input',function(){
         scaleCoef=size.value;
         block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
     });

     //opacity manipulation

     let opacity=document.getElementById('opacity')
     opacity.addEventListener('input',function(){
         block.style.opacity=opacity.value;
     });

      //shape manipulation

      let shape=document.getElementById('shape-select')
      let button=document.getElementById('ok-shape')
      button.addEventListener('click',function(){
        let option=shape.value;
        if(option==='1'){
            block.style.borderRadius='0';
            rotateDeg=0;
         block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        }else if(option==='2'){
            block.style.borderRadius='50%';
        }else{
            rotateDeg=45;
            block.style.borderRadius='0';
            block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        }
    })
    

         //hex manipulation

     let hex=document.getElementById('Hex')
     hex.addEventListener('keyup',function(e){
         if(e.key ==='Enter'){
         block.style.backgroundColor=`#${hex.value}`;
     }});

        //RGBA manipulation

        let r=document.getElementById('rgba-r');
        let g=document.getElementById('rgba-g');
        let b=document.getElementById('rgba-b');
        let a=document.getElementById('rgba-a');

        let rgbainput=document.querySelectorAll('.rgba-container input')

        rgbainput.forEach( function (Element) {
            Element.addEventListener('input',function(){
                block.style.backgroundColor= `rgba(${r.value},${g.value},${b.value},${a.value})`;
        });
        });
});