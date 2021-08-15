namespace Decorator {
  
  // Base Product Interface
  interface BaseProduct {
    getData(): any;
  }

  // Product Class
  class Product implements BaseProduct {
    name: string;
    price: number;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    getData(): any {
      return {
        name: this.name,
        price: this.price,
      };
    }
  }

  // Product Decorator Base Class
  abstract class ProductDecorator implements BaseProduct {
    protected product: Product;

    constructor(product: Product) {
      this.product = product;
    }

    abstract getData(): any;
  }

  
  // Imported Product Class
  class ImportedProduct extends ProductDecorator {
    getData() {
      return {
        name: this.product.name,
        price: this.product.price + 20000,
        tax: 10000
      };
    }
  }
  
  // Exported Product Class
  class ExportedProduct extends ProductDecorator {
    getData() {
      return {
        name: this.product.name,
        price: this.product.price + 30000,
        tax: 20000
      };
    }
  }

  const product1 = new Product('Sneakers',1200000)
  const productImport = new ImportedProduct(product1)
  
  const product2 = new Product('Sun glasses',1500000)
  const productExport = new ExportedProduct(product2)

  console.log(product1.getData());
  console.log(productImport.getData());
  console.log(product2.getData());
  console.log(productExport.getData());
  
  
}
