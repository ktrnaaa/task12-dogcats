const dog = document.getElementById('dog')
const dog_2 = document.querySelector('.elDog2')
const dog_3 = document.querySelector('.elDog3')
const cat = document.querySelector('.elCat')
const house = document.querySelector('.elHouse')
const frame = document.querySelector('.elFrame')
const gameover = document.querySelector('.gameover')
const allHome = document.querySelector('.allhome')
const elButton = document.querySelector('.resbtn')

let cat_left, cat_top, cat_right, cat_bottom, cat_height, cat_width
let  dog_left, dog_right, dog_bottom, dog_top,  dog_wight, dog_height, dog_mid_x, dog_mid_y
let dog_left2, dog_right2, dog_bottom2, dog_top2, dog_wight2, dog_height2, dog_mid_x2, dog_mid_y2
let dog_left3, dog_right3, dog_bottom3, dog_top3, dog_wight3, dog_height3, dog_mid_x3, dog_mid_y3
let house_left, house_top, house_height, house_width, house_right, house_bottom


let borderX = 1000
let borderY = 800
let x, y


let step = 80



const coordinates = () => {


    x = Math.floor(Math.random() * (borderX-100))
    y = Math.floor(Math.random() * (borderY-100))

    }

const createElement = (el) => {
    coordinates(el)
    el.style.left = `${x}px`
    el.style.top = `${y}px`

}


createElement(cat)
createElement(dog)
createElement(dog_2)
createElement(dog_3)
createElement(house)


/// координати всіх собак
const dog_coo1 = (dog) =>{

    dog_height = 100
    dog_wight = 100

    dog_left = parseInt(dog.style.left)
    dog_right = dog_left + dog_wight
    console.log(dog_left)

    dog_top = parseInt(dog.style.top)
    dog_bottom = dog_top + dog_height

    dog_mid_x = dog_left + dog_wight/2
    dog_mid_y = dog_top + dog_height/2

    console.log("собака1",  dog_left, dog_right, dog_top, dog_bottom, dog_mid_x, dog_mid_y)
}
const dog_coo2 = (dog_2) =>{

    dog_height2 = 100
    dog_wight2 = 100

    dog_left2 = parseInt(dog_2.style.left)
    dog_right2 = dog_left2 + dog_wight2
    console.log(dog_left2)

    dog_top2 = parseInt(dog_2.style.top)
    dog_bottom2 = dog_top2 + dog_height2

    dog_mid_x2 = dog_left2 + dog_wight2/2
    dog_mid_y2 = dog_top2 + dog_height2/2

    console.log("собака2",  dog_left2, dog_right2, dog_top2, dog_bottom2, dog_mid_x2, dog_mid_y2)
}
const dog_coo3 = (dog_3) =>{

    dog_height3 = 100
    dog_wight3 = 100

    dog_left3 = parseInt(dog_3.style.left)
    dog_right3 = dog_left3 + dog_wight3
    console.log(dog_left3)

    dog_top3 = parseInt(dog_3.style.top)
    dog_bottom3 = dog_top3 + dog_height3

    dog_mid_x3 = dog_left3 + dog_wight3/2
    dog_mid_y3 = dog_top3 + dog_height3/2

    console.log("собака3",  dog_left3, dog_right3, dog_top3, dog_bottom3, dog_mid_x3, dog_mid_y3)
}
/////


////коорд кішки
let cat_coo = (cat) =>{
    cat_height = 100
    cat_width = 100


    cat_left = parseInt(cat.style.left)
    cat_right = cat_left + cat_width

    cat_top = parseInt(cat.style.top)
    cat_bottom = cat_top + cat_height
    console.log ('cat', cat_left, cat_right)
}
cat_coo(cat)
///

/// координати будинку
let house_coo = (house) =>{

    house_height = 150
    house_width = 150

    house_left = parseInt(house.style.left)
    house_right = house_left+house_width

    house_top = parseInt(house.style.top)
    house_bottom = house_top + house_height

    console.log("house", house_left)
}
house_coo(house)
///



//// рухи собак


dog.addEventListener('click', (ev) => {       ///1 dog
    dog_coo1(dog)

    const pressX = ev.pageX
    const pressY = ev.pageY


    if ((pressX> dog_left)&&(pressY>dog_top)&&(pressX<dog_mid_x)&&(pressY<dog_mid_y)){
        console.log('вправо вниз', dog_top, dog_left, dog_mid_y)
        dog.style.left = `${dog_left + step}px`
        dog.style.top = `${dog_top + step}px`
        
    } else if ((pressX> dog_left)&&(pressY>dog_top)&&(pressX>dog_mid_x)&&(pressY<dog_mid_y)){
        console.log('вліво вниз', dog_top, dog_left, dog_mid_y)
        dog.style.left = `${dog_left - step}px`
        dog.style.top = `${dog_top + step}px`

    }    else if ((pressX> dog_left)&&(pressY>dog_top)&&(pressX>dog_mid_x)&&(pressY>dog_mid_y)){
            console.log('вліво вгору', dog_top, dog_left, dog_mid_y)
            dog.style.left = `${dog_left - step}px`
            dog.style.top = `${dog_top - step}px`

    }       else {
                console.log('вправо вгору', dog_top, dog_left, dog_mid_y)
                dog.style.left = `${dog_left + step}px`
                dog.style.top = `${dog_top - step}px`


}

//// перевірки на стіни
if ((dog_right>=1000)){
    dog.style.right = `${dog_right - step}px`
}
if (dog_left<=0){
    dog.style.left = `${dog_left + step}px`
    }
if (dog_top<=0){
    dog.style.top = `${dog_top + step}px`
    }
if (dog_bottom>=800){
    dog.style.bottom = `${dog_bottom - step}px`

}
///

/// перевірка на кота

if ((dog_right>cat_left+10)&&(dog_left<cat_right+10)&&(dog_top<cat_bottom+10)&&(dog_bottom>cat_top+10)){
    console.log('тут кіт!')
    frame.style.display = 'none'
    gameover.style.display = 'block'
}
///

//// перевірка на дім

if ((dog_right>house_left+20)&&(dog_left<house_right+20)&&(dog_top<house_bottom+20)&&(dog_bottom>house_top+20)){

    console.log('песик в доміку')
    dog.style.display = 'none'

}
////
})
dog_2.addEventListener('click', (ev) => {     //// 2 dog
    dog_coo2(dog_2)
    
    const pressX = ev.pageX
    const pressY = ev.pageY

    if ((pressX> dog_left2)&&(pressY>dog_top2)&&(pressX<dog_mid_x2)&&(pressY<dog_mid_y2)){
        console.log('вправо вниз', dog_top2, dog_left2, dog_mid_y2)
        dog_2.style.left = `${dog_left2 + step}px`
        dog_2.style.top = `${dog_top2 + step}px`
        
    } else if ((pressX> dog_left2)&&(pressY>dog_top2)&&(pressX>dog_mid_x2)&&(pressY<dog_mid_y2)){
        console.log('вліво вниз', dog_top2, dog_left2, dog_mid_y2)
        dog_2.style.left = `${dog_left2 - step}px`
        dog_2.style.top = `${dog_top2 + step}px`

    }    else if ((pressX> dog_left2)&&(pressY>dog_top2)&&(pressX>dog_mid_x2)&&(pressY>dog_mid_y2)){
            console.log('вліво вгору', dog_top2, dog_left2, dog_mid_y2)
            dog_2.style.left = `${dog_left2 - step}px`
            dog_2.style.top = `${dog_top2 - step}px`

    }       else {
                console.log('вправо вгору', dog_top2, dog_left2, dog_mid_y2)
                dog_2.style.left = `${dog_left2 + step}px`
                dog_2.style.top = `${dog_top2 - step}px`
}

//// перевірки на стіни
if ((dog_right2>=1000)){
    dog_2.style.right = `${dog_right2 - step}px`
    console.log('відскакує')
}
if (dog_left2<=0){
    dog_2.style.left = `${dog_left2 + step}px`
    }
if (dog_top2<=0){
    dog_2.style.top = `${dog_top2 + step}px`
    }
if (dog_bottom2>=800){
    dog_2.style.bottom = `${dog_bottom2 - step}px`

}
///
/// перевірка на кота

if ((dog_right2>cat_left+10)&&(dog_left2<cat_right+10)&&(dog_top2<cat_bottom+10)&&(dog_bottom2>cat_top+10)){
    console.log('тут кіт!')
    console.log('тут кіт!')
    frame.style.display = 'none'
    gameover.style.display = 'block'
}
///

//// перевірка на дім

if ((dog_right2>house_left+20)&&(dog_left2<house_right+20)&&(dog_top2<house_bottom+20)&&(dog_bottom2>house_top+20)){

    console.log('песик 2 в доміку')
    dog_2.style.display = 'none'


}

})
dog_3.addEventListener('click', (ev) => {         ///// 3 dog
    dog_coo3(dog_3)
    
    const pressX3 = ev.pageX
    const pressY3 = ev.pageY

    if ((pressX3> dog_left3)&&(pressY3>dog_top3)&&(pressX3<dog_mid_x3)&&(pressY3<dog_mid_y3)){
        console.log('вправо вниз', dog_top3, dog_left3, dog_mid_y3)
        dog_3.style.left = `${dog_left3 + step}px`
        dog_3.style.top = `${dog_top3 + step}px`
        
    } else if ((pressX3> dog_left3)&&(pressY3>dog_top3)&&(pressX3>dog_mid_x3)&&(pressY3<dog_mid_y3)){
        console.log('вліво вниз', dog_top3, dog_left3, dog_mid_y3)
        dog_3.style.left = `${dog_left3 - step}px`
        dog_3.style.top = `${dog_top3 + step}px`

    }    else if ((pressX3> dog_left3)&&(pressY3>dog_top3)&&(pressX3>dog_mid_x3)&&(pressY3>dog_mid_y3)){
            console.log('вліво вгору', dog_top3, dog_left3, dog_mid_y3)
            dog_3.style.left = `${dog_left3 - step}px`
            dog_3.style.top = `${dog_top3 - step}px`

    }       else {
                console.log('вправо вгору', dog_top3, dog_left3, dog_mid_y3)
                dog_3.style.left = `${dog_left3 + step}px`
                dog_3.style.top = `${dog_top3 - step}px`
}

//// перевірки на стіни
if ((dog_right3>=1000)){
    dog_3.style.right = `${dog_right3 - step}px`
    console.log('відскакує')
}
if (dog_left3<=0){
    dog_3.style.left = `${dog_left3 + step}px`
    }
if (dog_top3<=0){
    dog_3.style.top = `${dog_top3 + step}px`
    }
if (dog_bottom3>=800){
    dog_3.style.bottom = `${dog_bottom3 - step}px`

}
///
/// перевірка на кота

if ((dog_right3>cat_left+10)&&(dog_left3<cat_right+10)&&(dog_top3<cat_bottom+10)&&(dog_bottom3>cat_top+10)){
    console.log('тут кіт!')
    frame.style.display = 'none'
    gameover.style.display = 'block'
}
///

//// перевірка на дім

if ((dog_right3>house_left+20)&&(dog_left3<house_right+20)&&(dog_top3<house_bottom+20)&&(dog_bottom3>house_top+20)){

    console.log('песик 3 в доміку')
    dog_3.style.display = 'none'

}

/// перевірка на інших собак

if ((dog_right3>dog_left2+30)&&(dog_left3<dog_right2+30)&&(dog_top3<dog_bottom2+30)&&(dog_bottom3>dog_top2+30)){

    console.log('собаки зіштовхнулись!')
}
})
if ((dog_right3>dog_left+30)&&(dog_left3<dog_right+30)&&(dog_top3<dog_bottom+30)&&(dog_bottom3>dog_top+30)){

    console.log('собаки зіштовхнулись!')
}


/// оце не працює, чому - хз, але коду точно забагато

   


if  ((dog_right3>house_left+20)&&(dog_left3<house_right+20)&&(dog_top3<house_bottom+20)&&(dog_bottom3>house_top+20)&&(dog_right2>house_left+20)&&(dog_left2<house_right+20)&&(dog_top2<house_bottom+20)&&(dog_bottom2>house_top+20)&&(dog_right>house_left+20)&&(dog_left<house_right+20)&&(dog_top<house_bottom+20)&&(dog_bottom>house_top+20)){

    console.log ('всі песики вдома')
    frame.style.display = 'none'
    allHome.style.display = 'block'
}


elButton.addEventListener('click', () => {

    window.location.reload();


})