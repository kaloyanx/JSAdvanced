function solve() {
  let textRef = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let text = textRef.toLowerCase().split(" ");
  let result = "";

  switch (convention) {
    case "Camel Case":
      result = text.shift();

      for (el of text) {
        result += el[0].toUpperCase() + el.substring(1);
      }

      break;

    case "Pascal Case":
      for (el of text) {
        result += el[0].toUpperCase() + el.substring(1);
      }

      break;

    default:
      result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
