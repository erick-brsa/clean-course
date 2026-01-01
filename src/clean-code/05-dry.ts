type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {
        // Dry
        // if (this.name.length === 0) throw Error('name is empty');
        for (let key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (this[key].length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is empty`);
                    break;
                default:
                    throw Error(`${key} is not supported`);
            }
        }
        return true;
    }

    toString() {
        if (!this.isProductReady) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants.toString());
})();
