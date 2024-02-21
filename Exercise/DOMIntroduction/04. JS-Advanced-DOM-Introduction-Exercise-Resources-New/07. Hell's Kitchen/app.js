function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const textAreaRef = document.querySelector("textarea");
  const bestRestauranRef = document.querySelector("div #bestRestaurant p");
  const bestWorkerRef = document.querySelector("div #workers p");

  let resObj = {
    resName,
    totalSalary, 
    numberOfEmployees, 
    bestSalary: 0, 
    employeeName,
    avgSalary: (totalSalary, numberOfEmployees) => {
      return (totalSalary/numberOfEmployees).toFixed(2)
    }
  }

  function onClick() {
  let data = JSON.parse(textAreaRef.value);
  for (let line of data){
    resObj.bestSalary = 0;
    let [restaurantName, workersArr] = line.split(" - ");
    



  }

    
  }
}
/**
 * ["PizzaHut - Peter

500, George 300, Mark

800",

"TheLake - Bob 1300,

Joe 780, Jane 660"]
 */