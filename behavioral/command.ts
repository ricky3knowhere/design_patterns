class BaseUtilities {
  getData() {}
  deleteData() {}
}

interface Utility {
  execute(param: any): any;
}

class CallUtilities implements Utility {
  execute() {
    const utility = new BaseUtilities()
    utility.getData();
  }
}

new CallUtilities().execute();
