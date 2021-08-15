// Computer Type Option
enum ComputerType {
  PC = "PC",
  LAPTOP = "Laptop",
}

// Computer Base class
abstract class Computer {
  protected type: ComputerType;
  protected display: string;

  constructor(type: ComputerType, display: string) {
    this.type = type;
    this.display = display;
  }

  abstract getComputer(): string;
}

// Start Class List
class Pc extends Computer {
  constructor(display: string) {
    super(ComputerType.PC, display);
  }

  getComputer(): string {
    return `${this.type} with ${this.display} display\n`;
  }
}
class Laptop extends Computer {
  constructor(display: string) {
    super(ComputerType.LAPTOP, display);
  }

  getComputer(): string {
    return `${this.type} with ${this.display} display\n`;
  }
}
// End Class List

// Display Type Option
enum DisplayType {
  TFT = "TFT",
  IPS = "IPS",
}


// Start Display Factory Class
class TftDisplayFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.PC:
        return new Pc(DisplayType.TFT);
        
        case ComputerType.LAPTOP:
          return new Laptop(DisplayType.TFT);
          
          default:
            throw new Error("Invalid Computer Type");
    }
  }
}

class IpsDisplayFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.PC:
        return new Pc(DisplayType.IPS);
        
        case ComputerType.LAPTOP:
          return new Laptop(DisplayType.IPS);
          
          default:
            throw new Error("Invalid Computer Type");
    }
  }
}
// End Display Factory Class

// Computer Fatory Class
class ComputerFactory {
  buildComputer(
    displayType: DisplayType,
    computerType: ComputerType
  ): Computer {
    switch (displayType) {
      case DisplayType.TFT:
        return TftDisplayFactory.buildComputer(computerType);

      case DisplayType.IPS:
        return IpsDisplayFactory.buildComputer(computerType);

      default:
        throw new Error("Invalid Display Type");
    }
  }
}

const computerBuild1 = new ComputerFactory().buildComputer(
  DisplayType.TFT,
  ComputerType.LAPTOP
);
console.log(computerBuild1.getComputer());

const computerBuild2 = new ComputerFactory().buildComputer(
  DisplayType.IPS,
  ComputerType.PC
);
console.log(computerBuild2.getComputer());
