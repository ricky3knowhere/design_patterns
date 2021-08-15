// Base Data Interface
interface BaseData {
  getData(): {
    name: string;
    brand: string;
  };
}

// Start Interface for Product Type
interface IProduct extends BaseData {
  name: string;
  brand: string;
}

interface IMaterial {
  name: string;
  qyt: number;
}
// End Interface for Product Type


// Start Product Type Class
class Product implements IProduct {
  name: string;
  brand: string;
  
  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }

  getData() {
    return { name: this.name, brand: this.brand };
  }
}

class Material implements IMaterial {
  name: string;
  qyt: number;

  constructor(name: string, qyt: number) {
    this.name = name;
    this.qyt = qyt;
  }

  getData() {
    return { name: this.name, qyt: this.qyt };
  }
}
// End Product Type Class


// First Adapter Handler
class MaterialAdapter implements BaseData {
  private adaptee: Material;

  constructor(adaptee: Material) {
    this.adaptee = adaptee;
  }

  getData() {
    return { name: this.adaptee.name, brand: "" };
  }
}

// let list: any[] = []

// const data1 = new Product('Car', 'Ferrari')
// list.push(data1.getData())

// const data2 = new MaterialAdapter(new Material('Bumper Stroke', 12))
// list.push(data2.getData())

// const data = new Product('Bycicle', 'Xiaomi')
// list.push(data.getData())

// console.log(list);



// Second Adapter Handler
enum DataType {
  PRODUCT,
  MATERIAL,
}

class DataAdapter implements BaseData {
  name: string;
  brand: string;
  qyt: number;
  type: DataType;

  constructor({ name = "", brand = "", qyt = 0 } = {}, type: DataType) {
    this.name = name;
    this.brand = brand;
    this.qyt = qyt;
    this.type = type;
  }

  getData() {
    if (this.type == DataType.PRODUCT) {
      const product = new Product(this.name, this.brand);

      return { name: product.name, brand: product.brand };
    } else if (this.type == DataType.MATERIAL) {
      const material = new Material(this.name, this.qyt);

      return { name: material.name, brand: "" };
    }

    return { name: "", brand: "" };
  }
}


let list: any[] = []

const data1 = new DataAdapter({name: 'Car', brand: 'Ferrari'}, DataType.PRODUCT)
list.push(data1.getData())

const data2 = new DataAdapter({name: 'Stir Handler', qyt: 234}, DataType.MATERIAL)
list.push(data2.getData())

const data3 = new DataAdapter({name: 'Backpick', brand: 'Ferrari'}, DataType.PRODUCT)
list.push(data3.getData())


console.log(list);