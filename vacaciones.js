//capturamos dom del formulario


let diasVacas = inputDias
let ultimoSalario = inputSalario

let calcularPromedio= document.getElementById 
("btnCalcular")

calcularPromedio.addEventListener ("click", ()=>{
    let inputDias = document.getElementById ("inputDias")
    let inputSalario = document.getElementById ("inputSalario")
    console.log(`Usted tiene  ${inputDias.value} de vacaciones`);
    console.log(`Su ultimo salario fue de ${inputSalario.value}`);
    let resultadoDivision = (inputSalario.value/25)
    console.log(resultadoDivision);
    let promedio = (resultadoDivision*inputDias.value)
    console.log(`Usted debe recibir $${promedio} de liquidacion por vacaciones`);

    let lugarParrafo = document.getElementById ("cajaVacaciones")
    let parrafo = document.createElement ("p")
    parrafo.innerHTML= `<h5>Teniendo en cuenta que tenes ${inputDias.value} dias de vacaciones y tu ultimo salario fue de $${inputSalario.value}, te corresponden $${promedio} de liquidacion de vacaciones<h5/>`
    lugarParrafo.append (parrafo)
}
    )


