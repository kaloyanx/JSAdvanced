function cityRecord(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
  };
  return obj;
}

function townPopulation(arr) {
  let obj = {};
  for (command of arr) {
    let [name, size] = command.split(" <-> ");
    if (!obj.hasOwnProperty(name)) {
      obj[name] = 0;
    }
    obj[name] += Number(size);
  }
  console.log(obj);
}

function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor((this.population * percent) / 100);
    },
    applyRecession(percent) {
      this.population -= Math.floor((this.population * percent) / 100);
    },
  };
}

