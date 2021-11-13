const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=12bfebffba45470781c912068d9f6dd7";

const contentContainer = document.querySelector(".content-container");

async function getApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const facts = result.results;
    contentContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      let tags = facts[i].tags;
      let tagsCount = tags.length;

      if (i === 8) {
        break;
      }

      contentContainer.innerHTML += `<div class="results"> <h1>${facts[i].name}</h1> <p>${facts[i].rating}</p> <h3>Number of tags:</h3> <p>${tagsCount}</p></div>`;
    }
  } catch (error) {
    contentContainer.innerHTML = errorMessage(
      "Sorry, seems we had problems with loading the API"
    );
  }
}

getApi();
