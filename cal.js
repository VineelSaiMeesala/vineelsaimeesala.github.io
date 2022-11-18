var clr=document.getElementById('clr')
var time = document.getElementById('time')
var timer = document.getElementById('timebox')
var theme=document.getElementById('nn')
////////////////num//////////////////
var num1=document.getElementById('n1')
var num2=document.getElementById('n2')
var num3=document.getElementById('n3')
var num4=document.getElementById('n4')
var num5=document.getElementById('n5')
var num6=document.getElementById('n6')
var num7=document.getElementById('n7')
var num8=document.getElementById('n8')
var num9=document.getElementById('n9')
var num0=document.getElementById('n0')
///////////////options////////////////
var plus=document.getElementById('plus')
var minus=document.getElementById('minus')
var multi=document.getElementById('multi')
var divi=document.getElementById('divi')
var equal=document.getElementById('equal')
var txtbox = document.getElementById('inputtxt') 
var values = ''
    txtbox.innerHTML='Cisco<sub>By Mvsai</b>'
    txtbox.style.letterSpacing="2px"
    txtbox.style.fontSize="55px"
    clr.addEventListener('click',function(){
        txtbox.innerText=''
    })
    setTimeout(function(){
        txtbox.innerHTML=''
        txtbox.style.fontSize="30px"
        num1.addEventListener('click',function(){
            txtbox.append(num1.innerText)
        })
        num2.addEventListener('click',function(){
            txtbox.append(num2.innerText)
        })
        num3.addEventListener('click',function(){
            txtbox.append(num3.innerText)
        })
        num4.addEventListener('click',function(){
            txtbox.append(num4.innerText)
        })
        num5.addEventListener('click',function(){
            txtbox.append(num5.innerText)
        })
        num6.addEventListener('click',function(){
            txtbox.append(num6.innerText)
        })
        num7.addEventListener('click',function(){
            txtbox.append(num7.innerText)
        })
        num8.addEventListener('click',function(){
            txtbox.append(num8.innerText)
        })
        num9.addEventListener('click',function(){
            txtbox.append(num9.innerText)
        })
        num0.addEventListener('click',function(){
            txtbox.append(num0.innerText)
        })
        theme.addEventListener('click',function(){
            txtbox.style.backgroundColor="pink"
            txtbox.style.color="darkviolet"
            timer.style.backgroundColor="yellow"
            timer.style.color="red"
        })
        plus.addEventListener('click',function(){
            txtbox.append(plus.innerText)
        })
        minus.addEventListener('click',function(){
            txtbox.append(minus.innerText)
        })
        multi.addEventListener('click',function(){
            txtbox.append(multi.innerText)
        })
        divi.addEventListener('click',function(){
            txtbox.append(divi.innerText)
        })
        equal.addEventListener('click',function(){
           var x = txtbox.innerHTML
           console.log(x)
           var y = eval(x)
           txtbox.innerHTML=y
        })
    },800)
    time.addEventListener('click',function(){
        var tim = new Date()
        timer.value=(tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds())
        setTimeout(function(){
            timer.style.fontFamily="cursive"
            timer.style.fontSize="20px"
            timer.style.fontWeight="900"
            timer.value=('MVSAI')
        },3000)
    })
setTimeout(function(){
    var keys = confirm()
    if(keys == true){
        close()
    }
    else{

    }
},100000)


