namespace Chain_responsibility {
  // Product Class
  class Product {
    name: string;
    price: number;
    weight: number;

    constructor(name: string, price: number, weight: number) {
      this.name = name;
      this.price = price;
      this.weight = weight;
    }
  }

  // Base Validation Interface
  interface ValidationHandler {
    setValidation(validation: ValidationHandler): ValidationHandler;
    validate(request: any): any;
  }

  // Base Validation Class
  abstract class AbstractValidationHandler implements ValidationHandler {
    private setValidate: ValidationHandler | null = null;

    setValidation(validation: ValidationHandler): ValidationHandler {
      this.setValidate = validation;

      return validation;
    }

    validate(request: any): any {
      if (this.setValidate) {
        return this.setValidate.validate(request);
      }

      return request;
    }
  }

  // Name Validator Class
  class ProductNameValidator extends AbstractValidationHandler {
    validate(request: any): any {
      if (request.name.length > 24) {
        return "Product name  should be less than 25 character!";
      }
      return super.validate(request);
    }
  }

  // Price Validator Class
  class ProductPriceValidator extends AbstractValidationHandler {
    validate(request: any): any {
      if (request.price > 100) {
        return "Product price  should be less than $100!";
      }
      return super.validate(request);
    }
  }

  // Weight Validator Class
  class ProductWeightValidator extends AbstractValidationHandler {
    validate(request: any): any {
      if (request.weight > 5) {
        return "Product weight  should be less than 5kg!";
      }
      return super.validate(request);
    }
  }

  // Validators Instatiations
  const nameValidator = new ProductNameValidator();
  const priceValidator = new ProductPriceValidator();
  const weightValidator = new ProductWeightValidator();

  // Set Validators Order
  nameValidator.setValidation(priceValidator).setValidation(weightValidator);

  const product1 = new Product(
    "Acer Aspire 14 512 SSD, 4GB RAM, IPS LCD",
    100,
    1.6
  );
  const product2 = new Product("Sneakers", 100, 2);
  const product3 = new Product("LV Bag", 180, 5.01);

  console.log(nameValidator.validate(product1));
  console.log(nameValidator.validate(product2));
  console.log(nameValidator.validate(product3));
}
