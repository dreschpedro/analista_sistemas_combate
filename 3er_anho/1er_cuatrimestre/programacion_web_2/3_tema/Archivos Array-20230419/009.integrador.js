
localStorage.clear()

const alumnos=[["juan",5,9,6],["pedro",8,9,3]]

for(let i=0; i<2;i++){
    for(let j=0; j<4;j++){
        console.log(alumnos[i][j])
       
    }
   
}


localStorage.setItem("alumnos", JSON.stringify(alumnos))




