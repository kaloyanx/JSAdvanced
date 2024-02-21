function cityRecord(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
  };
  return obj;
}

function townPopulation(arr) {
  let result = {};

  for (let input of arr) {
    let [townName, townPopulation] = input.split(" <-> ");
    if (result[townName] != undefined) {
      result[townName] += Number(townPopulation);
    } else {
      result[townName] = Number(townPopulation);
    }
  }
  for (let [name, population] of Object.entries(result)) {
    console.log(`${name} : ${population}`);
  }
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
      this.treasury -= Math.floor((this.treasury * percent) / 100);
    },
  };
}

function factory(library, orders) {
  let result = [];

  for (let el of orders) {
    let placeholder = {};
    let [template, parts] = Object.entries(el);
    placeholder.name = template[1].name;

    for (let command of parts[1]) {
      if (library[command] != undefined) {
        placeholder[command] = library[command];
      }
    }

    result.push(placeholder);
  }

  return result;
}

function createAssemblyLine() {
  const funcObj = {
    hasClima: function hasClima(obj) {
      obj.temp = 21;
      obj.tempSettings = 21;
      obj.adjustTemp = function adjustTemp() {
        if (temp < tempSettings) {
          temp += 1;
        } else if (temp > tempSettings) {
          temp -= 1;
        }
      };
    },

    hasAudio: function hasAudio(obj) {
      obj.currentTrack = { name: null, artist: null };
      obj.nowPlaying = function nowPlaying() {
        if (currentTrack.name != null && currentTrack.artist != null) {
          console.log(
            `Now playing '${currentTrack.name}' by ${currentTrack.artist}`
          );
        }
      };
    },

    hasParktronic: function hasParktronic(obj) {
      obj.checkDistance = function checkDistance(distance) {
        if ((Number(distance) < 0, 1)) {
          console.log("Beep! Beep! Beep!");
        } else if ((Number(distance) < 0, 25)) {
          console.log("Beep! Beep!");
        } else if ((Number(distance) < 0, 5)) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };

  return funcObj;
}

function jsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];
  outputArr.push(makeKeyRow(arr));
  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
  outputArr.push("</table>");
  function makeKeyRow(arr) {}
  function makeValueRow(obj) {}
  function escapeHtml(value) {}
  console.log(outputArr.join("\n"));
}

// To Do

jsonToHtmlTable(
  `[{"Name":"Pesho", "Score":4, " Grade":8}, {"Name":"Gosho", "Score":5, " Grade":8}, {"Name":"Angel", "Score":5.50, " Grade":10}]`
);
