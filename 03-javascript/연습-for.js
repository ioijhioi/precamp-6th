for( let i = 0 ; i<5 ; i=i+1 ){
    console. log("안녕하세요")
}
// 5VM2774:2 안녕하세요
// undefined
for( let i = 0 ; i<5 ; i++ ){
    console. log("안녕하세요")
}
// 5VM2786:2 안녕하세요
// undefined
for( let i = 0 ; i<5 ; ++i ){
    console. log("안녕하세요")
}
// 5VM2797:2 안녕하세요
// undefined
const classmate = ["철수","영희", "훈이"]
// undefined
classmate[0]
// "철수"

for( let j = 0; j <3 ; j++ ) {
    console.log(classmate["j"])
}
// 3VM3076:2 undefined
// undefined
const classmates2 = [
    { name: "철수", age: 13}
    { name: "영희", age: 12}
]

const classmates2 = [
    { name: "철수", age: 13},
    { name: "영희", age: 12}
]
// undefined
classmates2[0].name
// "철수"
classmates2[0].age
// 13
classmates2[0].name + "는" + classmates2[0].age + "살 입니다."
// "철수는13살 입니다."
classmates2[1].name + "는" + classmates2[1].age + "살 입니다"
// "영희는12살 입니다"
for( let i=0 ; i<=1; i++){
    con.log(classmates2[i].name + "는" + classmates2[i].age + "살 입니다.")

}

for( let i=0 ; i<=1; i++){
    console.log(classmates2[i].name + "는" + classmates2[i].age + "살 입니다.")

}
// VM3679:2 철수는13살 입니다.
// VM3679:2 영희는12살 입니다.
// undefined