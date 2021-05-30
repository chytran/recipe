const recipeContainer = document.getElementById("container-recipe");

getRandomMeal();

async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
}

async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const respData = await resp.json();
    const getMeal = respData.meals[0];

    console.log(getMeal);
}

async function getMealsBySearch(term) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
    const respData = await resp.json();
    const getMeal = respData.meals[0];

    console.log(getMeal);
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
        <div class="real__recipe">
            <div class="meal__header" id="meal-header">
                ${random ? `
                <span class="random">Random Recipe</span>` : ''}
                <img 
                    src="${mealData.strMealThumb}" 
                    alt="${mealData.Meal}"
                />
            </div>
            <div class="meal__body" id="meal-body">
                <h4>${mealData.Meal}</h4>
                <button class="fav-button">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    recipeContainer.appendChild(meal);
}