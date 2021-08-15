namespace State {
  // Product Interface
  interface IProduct {
    name: string;
    setAsFeaturedProduct(): void;
  }

  // Featured Product Class
  class FeaturedProduct {
    state: IProduct;

    constructor(state: IProduct) {
      this.state = state;
    }

    setFeaturedProduct(state: IProduct): void {
      this.state = state;
    }

    getFeaturedProduct(): void {
      console.log(this.state);
    }

    publish(): void {
      this.state.setAsFeaturedProduct();
    }
  }

  // Fashion Product Class
  class FashionProduct implements IProduct {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    setAsFeaturedProduct(): void {
      console.log(`Successflly, Set ${this.name} product as featured product.`);
    }
  }

  // Gadget Product Class
  class GadgetProduct implements IProduct {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    setAsFeaturedProduct(): void {
      console.log(
        `Successfully, Set ${this.name} product as featured product.`
      );
    }
  }

  const product1 = new FashionProduct("Hermes Handbag");
  const product2 = new GadgetProduct("Mechanical Keyboard");

  const featuredProduct = new FeaturedProduct(product1);

  featuredProduct.publish();
  featuredProduct.getFeaturedProduct();
  console.log("\n");

  featuredProduct.setFeaturedProduct(product2);
  featuredProduct.publish();
  featuredProduct.getFeaturedProduct();
}
