// Covid Base class
interface ICovid {
  getData(): Promise<{ confirmed: number; recovered: number; deaths: number }>;
}

// Temporary Data Variable
let tempData: any;

// Covid Class
class Covid implements ICovid {
  country: string;

  constructor(country: string) {
    this.country = country;
  }

  async getData() {
    const response: any = await fetch(
      `https://covid19.mathdro.id/api/countries/${this.country}`
    );
    const data: any = await response.json();
    tempData = data;

    return {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
    };
  }
}

// Covid Proxy(To Get Temporary Data) Class
class CovidProxy implements ICovid {
  data: Covid;

  constructor(data: Covid) {
    this.data = data;
  }

  async getData() {
    if (tempData) {
      console.log("This Data from Database");

      return {
        confirmed: tempData.confirmed.value,
        recovered: tempData.recovered.value,
        deaths: tempData.deaths.value,
      };
    }

    console.log("This Data from API");
    return this.data.getData();
  }
}

const run = async () => {
  const callApi = new Covid("id");

  const getApi1 = new CovidProxy(callApi);
  console.log(await getApi1.getData(), "\n");

  const getApi = new CovidProxy(callApi);
  console.log(await getApi.getData());
};

run();
