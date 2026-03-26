export interface Usuario {
  nombre: string,
  email: string,
  rol: 'admin' | 'manager' | 'base',
}

export type Usuarios = Array<Usuario>

export interface ProductoTienda {
  id: number,
  nombre: string,
  precio: number,
  stock: number,
}

export type ProductosTienda = Array<ProductoTienda>


// export type Precio = number
// export type ProductoTienda2 = {
//   id: number,
//   nombre: string,
//   precio: Precio,
//   stock: number,
// }