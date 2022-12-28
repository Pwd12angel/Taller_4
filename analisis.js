//Funciones Helpers 
function esPar (numero){
    return (numero % 2 === 0 );
}


function calcularMediaAritmetica (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado , nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

console.log(salarioColSorted);
//Mediana General 
function medianaSalarial (lista){
    const mitad = parseInt(lista.length / 2 );

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        console.log({personitaMitad1, personitaMitad2});

        const mediana = calcularMediaAritmetica([personitaMitad1 , personitaMitad2]);

        
        return mediana;
   
    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad; 
    }
}

const medianaGeneralCol = medianaSalarial(salarioColSorted);



//Mediana Top 10 

//Variables 
const spliceStart = (salarioColSorted.length * 90) / 100;

const spliceCoutn = salarioColSorted.length - spliceStart;

console.log({spliceStart,spliceCoutn});

const salarioColTop10 = salarioColSorted.splice(spliceStart,spliceCoutn);

console.log(salarioColTop10);

const medianaGeneralColTop10 = medianaSalarial(salarioColSorted);

console.log({
    medianaGeneralCol,
    medianaGeneralColTop10
}
);



