export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // replace the function below
    // const self = this;
    // this.addNeighborhood = function add(newNeighborhood) {
    //   self.sanFranciscoNeighborhoods.push(newNeighborhood);
    //   return self.sanFranciscoNeighborhoods;
    //};

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
  }