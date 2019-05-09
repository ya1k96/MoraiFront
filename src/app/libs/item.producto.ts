export interface ItemProducto {
    _id: string;
    nombre: string;
    tipo: string;
    precio: string;
    stock: string;
    ult_abast: Date;
    img_src: string;
    __v: string;
    size?: [];
}
export interface Cart {
    id: string;
    cantidad: number;
    items: ItemProducto;
}

