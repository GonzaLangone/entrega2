
class Pizza{
    constructor (id, titulo, ingredientes, estado){
        this.id = id;
        this.titulo = titulo;
        this.ingredientes = ingredientes;
        this.estado = estado;
    }
}




let pedir = 0;
let contador = 0;
let btnCancelar = document.querySelector('#cancelar');
let agregarPedido = document.querySelector('#pedidos');

let pedidosEntregados = [];
let pedidosPizza = [];
let pedidosCancelados = [];


while (pedir != -1){
    pedir = parseInt(prompt('Ingrese los pedidos: \n 1. PIZZA MARGARITA \n 2. PIZZA CEBOLLA \n 3. PIZZA MUZZARELLA \n -1. SALIR' ))
    if (pedir === 1){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza margarita', 'margarita', 'PEDIDO'))
    }
    else if (pedir === 2){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza de cebolla', 'cebolla', 'PEDIDO'))

    }
    else if (pedir === 3){
        contador = contador+1,
        pedidosPizza.unshift(new Pizza(contador,'pizza muzzarella', 'muzzarela', 'PEDIDO'))

    }

};
function cargaPedidos(){

    agregarPedido.innerHTML = '';
    pedidosPizza.forEach((producto) => {
        let div = document.createElement('div')
        div.classList.add('card-pedidos')
        div.innerHTML = `    
        <h1> ${producto.titulo}</h1>
            <section>
                <section class="id-seccion">
                <h1>ID </h1>
                <h1 id="id-pedido">: ${producto.id}</h1>
                </section>
            
                <p>Ingredientes:</p>
                <ul>
                <li>${producto.ingredientes}</li>
                </ul>
            </section>`;
            let botonAgregar = document.createElement('button');
            botonAgregar.classList.add('boton-entregado')
            botonAgregar.innerText = 'Entregado'
            botonAgregar.addEventListener('click', () => {
                entregados(producto);
                
            })
            div.append(botonAgregar);
    
            agregarPedido.append(div);
    
            let botonEliminar = document.createElement('button');
            botonEliminar.classList.add('boton-eliminar')
            botonEliminar.innerText = 'CANCELAR'
            botonEliminar.addEventListener('click', () => {
                cancelados(producto)
            })
            div.append(botonEliminar);
    
            agregarPedido.append(div);
    
    })

};
function eliminar(producto){
    const indice = pedidosPizza.findIndex((id) => id.id === producto.id);
    pedidosPizza.splice(indice,1);
}

function entregados(producto){
    producto.estado = 'ENTREGADO'
    pedidosEntregados.push(producto)
    eliminar(producto);
    cargaPedidos();

    let entregados = document.querySelector("#entregados");
    let entregadosTitulo = document.querySelector("#entregadosTitulo");
        entregados.classList.remove("d-none")
        entregadosTitulo.classList.remove("d-none")

        entregados.innerHTML = '';
        setTimeout(() => {        pedidosEntregados.forEach((producto) =>{
            let div = document.createElement('div')
            div.classList.add('card-pedidos-entregados')
            div.innerHTML = `
            <h1> ${producto.titulo}</h1>
            <section>
                <section class="id-seccion">
                <h1>ID </h1>
                <h1 id="id-pedido">: ${producto.id}</h1>
                </section>
                <section>
                <h1>${producto.estado}</h1>
            </section>
            </section>
            `   
            entregados.append(div);})

            
        }, 1000);



}

function cancelados(producto){
    producto.estado = 'CANCELADO'
    pedidosCancelados.push(producto)
    eliminar(producto);
    cargaPedidos();

    let cancelados = document.querySelector("#cancelados");
    let canceladosTitulo = document.querySelector("#canceladosTitulo");
        cancelados.classList.remove("d-none")
        canceladosTitulo.classList.remove("d-none")

        cancelados.innerHTML = '';
        setTimeout(() => {        
            pedidosCancelados.forEach((producto) =>{
            let div = document.createElement('div')
            div.classList.add('card-pedidos-cancelados')
            div.innerHTML = `
            <h1> ${producto.titulo}</h1>
            <section>
                <section class="id-seccion">
                <h1>ID </h1>
                <h1 id="id-pedido">: ${producto.id}</h1>
                </section>
                <section>
                <h1>${producto.estado}</h1>
            </section>
            </section>
            `   
            cancelados.append(div);})

            
        }, 1000);



}
    

function actualizarEntregados(){
    if (pedidosEntregados.length != 0){



            
    }
}

cargaPedidos();
console.log(pedidosPizza)