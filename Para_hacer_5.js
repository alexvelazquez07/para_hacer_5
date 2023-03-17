
//OBTENER EL MAXIMO Y MINIMO DE  UN OBJETO
objeto = {
    resultados: [
      {
        dateTime: '2021-08-13',
        value: '12'
      },
      {
        dateTime: '2021-08-14',
        value: '85'
      },
      {
        dateTime: '2021-08-15',
        value: '1'
      },
      {
        dateTime: '2021-08-16',
        value: '3'
      },
      {
        dateTime: '2021-08-17',
        value: '12'
      }
    ]
  }
  
  // Encuentra el valor máximo
  maxValue=Math.max(...objeto.resultados.map(x=>parseInt(x.value)))
 // Encuentra el valor minimo
  minValue=Math.min(...objeto.resultados.map(x=>parseInt(x.value)))
  // Filtra el objeto tal que los valores sean igual al máximo
  result=objeto.resultados.filter(x=>x.value==maxValue)
// Filtra el objeto tal que los valores sean igual al minimo
  resultMin=objeto.resultados.filter(x=>x.value==minValue)
 // Imprime el resultado
  console.log(result) // MAXIMO
  console.log(resultMin) // MINIMO
//OBTENER EL MENOR DE UN OBJETO

//HALLAR PROMEDIO
let amigos = [
    {amigo: 'Juan', edad: 23},
    {amigo: 'Diego', edad: 17}
];

let total = 0;

amigos.map(({edad}) => total+=edad)

const resultado = total / amigos.length;

console.log(resultado)
