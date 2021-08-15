namespace Observer {

  // Subject Interface
  interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }

  // Observer Interface
  interface Observer {
    name: string;
    update(observer: Subject): void;
  }


  // Promoted Subject Class
  class PromotedSubject implements Subject {
    public isPromoted: boolean = false;
    private observers: Observer[] = [];

    attach(observer: Observer): void {
      const isExist = this.observers.includes(observer);

      if (isExist) {
        return console.log(`${observer.name} observer  is already exist!`);
      }

      this.observers.push(observer);
      console.log(`${observer.name} observer successfully added.`);
    }

    detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);

      if (observerIndex === -1) {
        return console.log(`${observer.name} observer not found!`);
      }

      this.observers.splice(observerIndex, 1);
      console.log(`${observer.name} successfully deleted`);
    }
    
    setPromoted(status: boolean): void {
      this.isPromoted = status;
      this.notify();
    }

    notify(): void {
      for (const observer of this.observers) {
        observer.update(this);
      }
    }

  }


  // Product Class
  class Product implements Observer {
    
    name: string

    constructor(name: string) {
      this.name = name
    }

    update(observer: Subject): void {
      if (observer instanceof PromotedSubject && observer.isPromoted) {
        console.log(this.name +' successfully added to Promoted Product.');
        
      }
    }
  }

  const promoted = new PromotedSubject()

  const product1 = new Product('Mechanical Keyboard')
  const product2 = new Product('Gaming Mouse')
  const product3 = new Product('Curved Monitor')

  promoted.attach(product1)
  promoted.attach(product2)
  promoted.attach(product3)
  console.log('\n');

  promoted.setPromoted(true)

  console.log('\n');
  
  promoted.detach(product2)
  console.log(promoted);
  
}
