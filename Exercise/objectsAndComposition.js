function calorieObject(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i += 2) {
    res[arr[i]] = Number(arr[i + 1]);
  }
  console.log(res);
}

function constructionCrew(worker) {
  if (worker.dizziness) {
    worker.dizziness = false;
    worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
  }
  return worker;
}

function carFactory(obj) {
  let res = {
    model: obj.model,
  };
  if (obj.power <= 90) {
    res.engine = { power: 90, volume: 1800 };
  } else if (obj.power <= 120) {
    res.engine = { power: 120, volume: 2400 };
  } else {
    res.engine = { power: 200, volume: 3500 };
  }
  if (obj.carriage === "hatchback") {
    res.carriage = { type: "hatchback", color: obj.color };
  } else {
    res.carriage = { type: "coupe", color: obj.color };
  }
  let wheels = new Array(4);
  obj.wheelsize % 2 === 0
    ? wheels.fill(obj.wheelsize - 1)
    : wheels.fill(obj.wheelsize);
  res.wheels = wheels;
  return res;
}

function heroicInventory(arr) {
  let res = [];
  for (el of arr) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    res.push({ name, level, items });
  }
  console.log(JSON.stringify(res));
}

function lowestPricesInCities(data) {
  let result = {};
  for (el of data) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (!result.hasOwnProperty(product)) {
      result[product] = { town, price };
    } else if (result[product]["price"] > price) {
      result[product] = { town, price };
    }
  }
  for (el in result) {
    console.log(`${el} -> ${result[el]["price"]} (${result[el]["town"]})`);
  }
}

function storreCatalogue(data) {
  let sortingArr = [];
  for (el of data) {
    let [item, price] = el.split(" : ");
    let tempArr = [item, price];
    sortingArr.push(tempArr);
  }
  sortingArr.sort((a, b) => a[0].localeCompare(b[0]));
  let placeholder = "A";
  for (let i = 0; i < sortingArr.length; ) {
    let [name, price] = sortingArr[i];
    if (placeholder === name[0]) {
      console.log(placeholder);
      while (sortingArr[i][0][0] === placeholder) {
        console.log(`  ${sortingArr[i][0]}: ${sortingArr[i][1]}`);
        i++;
        if (i >= sortingArr.length) {
          return;
        }
      }
    }
    placeholder = sortingArr[i][0][0];
  }
}

function townsToJSON(data) {
  let arr = data
    .shift()
    .split("|")
    .map((x) => x.trim())
    .filter((x) => !!x);
  let [param1, param2, param3] = arr;
  let result = [];
  for (entry of data) {
    let [val1, val2, val3] = entry
      .split("|")
      .map((x) => x.trim())
      .filter((x) => !!x);
    val2 = Number(val2).toFixed(2);
    val3 = Number(val3).toFixed(2);
    let obj = {
      [param1]: val1,
      [param2]: Number(val2),
      [param3]: Number(val3),
    };
    result.push(obj);
  }
  console.log(JSON.stringify(result));
}

function rectangle(width, height, color) {
  color = color[0].toUpperCase() + color.substring(1);
  let result = {
    width,
    height,
    color,
    calcArea: function () {
      return this.width * this.height;
    },
  };
  return result;
}

function solve() {
const canCast = (state) => ({
  csat: (spell) => {
    console.log(`${state.name} cast ${spel}`);
    state.mana--;
  }
})

const canFight = (state) => ({
  fight: () => {
    console.log(`${state.name} slashes at the foe!`);
    state.stamina--;
  }
})
  
const fighter = (name) => {
  let state = {
    name, 
    health: 100,
    stamina: 100
  }
  return Object.assign(state, canFight(state));
}

const mage = (name) => {
  let state = {
    name, 
    health: 100,
    mana: 100
  }
  return Object.assign(state, canCast(state))
}
return {mage:mage, fighter: fighter}
  } // check again//
 

