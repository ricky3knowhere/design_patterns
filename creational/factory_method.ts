// Class Intrerface / Base Class
interface Logistic {
  qyt: number
  shipment(): void
}

// Start Class List
class Truck implements Logistic {
  
  qyt: number
  
  constructor(qyt: number){
    this.qyt = qyt
  }
  
  shipment() {
    console.log(`This is Truck shipment, it's contain  ${this.qyt} goods`);
    
  }
}

class Plane implements Logistic {
  
  qyt: number

  constructor(qyt: number){
    this.qyt = qyt
  }

  shipment() {
    console.log(`This is Plane shipment, it's contain  ${this.qyt} goods`);
    
  }
}

class Ship implements Logistic {
  
  qyt: number

  constructor(qyt: number){
    this.qyt = qyt
  }

  shipment() {
    console.log(`This is Ship shipment, it's contain  ${this.qyt} goods`);
    
  }
}
// End Class List


// Shipment Option
type shipmentOpt = {
  qyt: number
  vehicle: string
}


// Factory Interface
interface Factory {
  create(shipment: shipmentOpt): Logistic
}


// Run Factory
class LogisticFactory implements Factory {
  create(shipment: shipmentOpt): Logistic {

    if (shipment.vehicle == 'deliver_by_land') {
      return new Truck(shipment.qyt)

    } else if(shipment.vehicle == 'deliver_by_air') {
      return new Plane(shipment.qyt)

    } else if (shipment.vehicle == 'deliver_by_sea') {
      return new Ship(shipment.qyt)
    } 

    throw new Error("Invalid argument!");
    
  }

}

const logistic = new LogisticFactory()
const deliver = logistic.create({qyt: 1000, vehicle: 'deliver_by_sea'})
deliver.shipment()
const deliver2 = logistic.create({qyt: 1400, vehicle: 'deliver_by_land'})
deliver2.shipment()
const deliver3 = logistic.create({qyt: 22000, vehicle: 'deliver_by_air'})
deliver3.shipment()
