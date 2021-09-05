var name = prompt('Введите своё имя')
    born = prompt('Введи свой год рождения')
    year = prompt('Введите настоящее время ')

function myself() {
    let myname = name
    let age =', Ваш возраст ' + (year - born)
    alert(myname + age)
}
myself()

let number = prompt('Введите число')

for (let i = 1;i <= number;i++) { 
   function first(min,max) {
       let num = Math.floor(Math.random() * (max + 1 - min) + min)
       return num;
   }
   function second(min,max) {
       let num2 = Math.floor(Math.random() * (max + 1 - min) + min)
       return num2;
   }
   
   let ask = prompt(first + second)
}




    