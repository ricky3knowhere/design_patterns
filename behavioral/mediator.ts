namespace Mediartor {
  
  // Product Interface
  interface IProducts {
    name: string;
    sell(): void;
  }

  // Mediator Interface
  interface IMediator {
    registerProduct(product: IProducts): void;
    setAvailableStatus(status: boolean): void;
    isAvailable(): boolean;
  }

  // Product Class
  class Products implements IProducts {
    name: string;
    mediator: IMediator;

    constructor(name: string, mediator: IMediator) {
      this.name = name;
      this.mediator = mediator;
    }

    sell(): void {
      if (this.mediator.isAvailable()) {
        this.mediator.setAvailableStatus(false);
        console.log(`${this.name} successfully sold.`);

      } else {
        console.log("Unregistered product cannot be sold!");

      }
    }
  }

  // Product Meidator Class
  class ProductMediator implements IMediator {
    product?: Products;
    status: boolean = false;

    registeredProduct(): void {
      if (this.status) {
        console.log(this.product);
      } else {
        console.log("No product for sale!");
      }
    }

    registerProduct(product: Products): void {
      if (this.status) {
        console.log(`Cannot register, The product hasn't sold yet!`);

      } else {
        this.product = product;
        this.status = true;
        console.log(`Product of ${product.name} successfully added.`);
      }
    }

    setAvailableStatus(status: boolean): void {
      this.status = status;
    }

    isAvailable(): boolean {
      return this.status;
    }
  }



  const mediator = new ProductMediator();

  const product1 = new Products("TWS", mediator);
  const product2 = new Products("Headphone", mediator);

  mediator.registerProduct(product1)
  mediator.registerProduct(product2)

  product1.sell()
  product2.sell()

  mediator.registeredProduct()

  console.log('\n\n');
  

  // ======================================================

  mediator.registerProduct(product2)
  mediator.registeredProduct()
  product2.sell()
  mediator.registeredProduct()
}


