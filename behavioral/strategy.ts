// Number Converter Interface
interface NumberConverter {
  convertNumber(number: number): void;
}

// Number Convertion Class
class NumberConvertion {
  private staregy: NumberConverter;

  constructor(strategy: NumberConverter) {
    this.staregy = strategy;
  }

  execute(number: number): void {
    this.staregy.convertNumber(number);
  }
}

// Convert to Currency Class
class convertToCurrency implements NumberConverter {
  convertNumber(number: number): void {
    console.log(
      number.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "EUR",
      })
      );
    }
  }
  
// Convert to Decimal Class
class convertToDecimal implements NumberConverter {
  convertNumber(number: number): void {
    console.log(
      number.toLocaleString("id-ID", {
        minimumFractionDigits: 2
      })
      );
    }
  }
  
// Convert to Date Class
class convertToDate implements NumberConverter {
  convertNumber(number: number): void {
    console.log(new Date(number * 99999).toUTCString()
    );
  }
}

const number = new NumberConvertion(new convertToCurrency())
number.execute(12900000)

const numberx = new NumberConvertion(new convertToDecimal())
numberx.execute(12900000)

const numberz = new NumberConvertion(new convertToDate())
numberz.execute(12900000)