
export class Storage {
    constructor() {}
    addStorage( item ) {
        item = {
            name: 'item',
            cant: 2
        };
        localStorage.setItem('cart', item);
    }
}

