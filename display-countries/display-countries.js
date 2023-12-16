// Use fetch and get all the countries data
// const responsePromise = fetch("https://restcountries.com/v3.1/all");
// responsePromise
//   .then((value) => {
//     const dataPromise = value.json(); // value.json() returns a promise with the expected data(countries info)
//     console.log(dataPromise);
//     return dataPromise;
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((country) => {
//       console.log(country.name.common, country.flag);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const flagsArea = document.getElementById("flags-area");
const appendCountry = (imageUrl) => {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  flagsArea.appendChild(imgElement);
};

const getAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const countries = await response.json();

    countries.forEach((country) => {
      appendCountry(country.flags.png);
    });
  } catch (err) {
    console.log(err);
  }
};

getAllCountries();

// const deleteTodo = async () => {
//   try {
//     const deleteResponse = await fetch("https://restcountries.com/v3.1/all");

//     console.log("Deleted Successfully");
//   } catch (err) {
//     console.log("Ther was some problem in Deleting", err);
//   }
// };

// deleteTodo();
