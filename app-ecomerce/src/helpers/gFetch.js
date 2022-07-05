const productos = [
    { 
        id: 1, 
        nombre: 'Suzuki Gixxer 2022 negro',
        marca: 'SUZUKI',
        precio: '3099',
        img: '../../src/img/suzuki-gixxer-155-2022-negro-43eca5.png'
    },
    { 
        id: 2, 
        nombre: 'Honda Twister 2022', 
        marca: 'SUZUKI',
        precio: '10',
        img: '../../src/img/honda-cb125f-twister-2022.png'
    },
    { 
        id: 3, 
        nombre: 'Honda Navi 2022', 
        marca: 'SUZUKI',
        precio: '10',
        img: '../../src/img/honda-navi-110-2022.png'
    },
    { 
        id: 4, 
        nombre: 'Honda V-Blade 2021', 
        marca: 'SUZUKI',
        precio: '10',
        img: '../../src/img/honda-x-blade-2021.png'
    },
    { 
        id: 5, 
        nombre: 'Nexus 110a 2021', 
        marca: 'SUZUKI',
        precio: '10',
        img: '../../src/img/nexus-110a-2021.png'
    },
    { 
        id: 6, 
        nombre: 'Nexus 150dk 2021', 
        marca: 'SUZUKI',
        precio: '10',
        img: '../../src/img/nexus-150dk-2021.png'
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