// Price Interface
interface Price {
  priceName: string
  price: number
  getPrice(): string
}

// Start Price Type Class
class Cheap implements Price {
  priceName = 'Cheap'
  price: number

  constructor(price : number) {
    this.price = price;
  }
  
  getPrice() {
    return `$${this.price},- ${this.priceName} price.`
  }
}

class Expensive implements Price {
  priceName = 'Expensive'
  price: number
  
  constructor(price : number) {
    this.price = price;
  }
  
  getPrice() {
    return `$${this.price},- ${this.priceName} price.`
  }
}
// End Price Type Class


// Start Product Object Creation
interface Product_interface {
  name: string
}

abstract class Products implements Product_interface {
  name: string
  price: Price
  
  constructor(name: string, price: Price){
    this.name = name
    this.price = price
  }
  
  abstract getData(): void
}
// End Product Object Creation


// Start Product Type Creation
class Fashion extends Products {
  getData() {
    return `${this.name} is sold with ${this.price.getPrice()}`
  }
}


class Phone extends Products {
  getData() {
    return `${this.name} is sold with ${this.price.getPrice()}`
  }
}
// End Product Type Creation


const produt1 = new Fashion('Gucci Handbag', new Expensive(12000000))
console.log(produt1.getData());

const produt2 = new Phone('Galaxy J2 prime', new Cheap(800000))
console.log(produt2.getData());

const produt = new Fashion('LV T-shirt', new Expensive(4000000))
console.log(produt1.getData());
