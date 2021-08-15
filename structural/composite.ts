// Category Base Class
abstract class Category {
  name: string;
  children: Category[] = [];
  parent: Category | null = null;

  constructor(name: string) {
    this.name = name;
  }

  setParent(parent: Category | null) {
    this.parent = parent;
  }

  getParent(): Category | null {
    return this.parent;
  }

  isComposite(): boolean {
    return false;
  }

  abstract getName(): string;
}


// Final Product Class
class FinalProduct extends Category {
  getName(): string {
    return this.name;
  }
}


// Category Utility Function
class CategoryComposite extends Category {
  constructor(name: string) {
    super(name);
  }

  add(category: Category) {
    this.children.push(category);
    this.setParent(category);
  }

  remove(category: Category): void {
    const categoryIndex = this.children.indexOf(category);

    this.children.splice(categoryIndex, 1);
    category.setParent(null);
  }

  isComposite(): boolean {
    return true;
  }
  getName(): string {
    return this.name;
  }
}

const category = new CategoryComposite('category')

const desktop = new CategoryComposite('desktop')
const phone = new CategoryComposite('phone')

category.add(desktop)
category.add(phone)

const pc = new CategoryComposite('pc')
const laptop = new CategoryComposite('laptop')
const tabPC = new CategoryComposite('tabPC')

desktop.add(pc)
desktop.add(laptop)
desktop.add(tabPC)

const android = new CategoryComposite('android')
const ios = new CategoryComposite('ios')
const harmonyOS = new CategoryComposite('harmonyOS')

phone.add(android)
phone.add(ios)
phone.add(harmonyOS)

const samsung = new FinalProduct('samsung')

android.add(samsung)

const printCategory = (category: Category): void => {
  console.log('Category : '+ category.getName());
  
  category.children.forEach((e) =>{
    if (e.isComposite() && e.children.length) {
      printCategory(e)
    } else {
      console.log('Product\t : '+ e.getName());
    }
  })
}

printCategory(category)
