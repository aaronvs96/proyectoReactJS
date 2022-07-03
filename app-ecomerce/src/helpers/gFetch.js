const productos = [
    { 
        id: 1, 
        nombre: 'producto1', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    },
    { 
        id: 2, 
        nombre: 'producto2', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    },
    { 
        id: 3, 
        nombre: 'producto3', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    },
    { 
        id: 4, 
        nombre: 'producto4', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    },
    { 
        id: 5, 
        nombre: 'producto5', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    },
    { 
        id: 6, 
        nombre: 'producto6', 
        precio: '10',
        img: '../../src/img/bajaj-boxer-100-2021.png'
    }
]

export const gFetch = new Promise((resolve, reject) => {
    let condicion = true;
    if (condicion) {
        setTimeout(()=>{
            resolve(productos);
        }, 2000)
        
    } else {
        reject('algo anda mal')
    }
});