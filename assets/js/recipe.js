const recipeContainer = document.getElementById("recipes");

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
    console.log(mealData);
    meal.innerHTML = `
        <div class="real__recipe">
            <div class="meal__header" id="meal-header">
                ${random ? `
                <span class="random">${mealData.strMeal}</span>` : ''}
                <img 
                    class="recipe__image"
                    src="${mealData.strMealThumb}" 
                    alt="${mealData.Meal}"
                />
            </div>
            <h2 class="ingredient__title">Ingredients</h2>
            <div class="ingredient__container" id="ingredient-container">
                <div className="ingredient__list">
                    <div className="ingredient__name">${mealData.strIngredient1}</div>
                    <div className="ingredient__name">${mealData.strIngredient2}</div>
                    <div className="ingredient__name">${mealData.strIngredient3}</div>
                    <div className="ingredient__name">${mealData.strIngredient4}</div>
                    <div className="ingredient__name">${mealData.strIngredient5}</div>
                    <div className="ingredient__name">${mealData.strIngredient6}</div>
                    <div className="ingredient__name">${mealData.strIngredient7}</div>
                    <div className="ingredient__name">${mealData.strIngredient8}</div>
                    <div className="ingredient__name">${mealData.strIngredient9}</div>
                    <div className="ingredient__name">${mealData.strIngredient10}</div>
                    <div className="ingredient__name">${mealData.strIngredient11}</div>
                    <div className="ingredient__name">${mealData.strIngredient12}</div>
                    <div className="ingredient__name">${mealData.strIngredient13}</div>
                    <div className="ingredient__name">${mealData.strIngredient14}</div>
                    <div className="ingredient__name">${mealData.strIngredient15}</div>
                    <div className="ingredient__name">${mealData.strIngredient16}</div>
                </div>
                <div className="ingredient__amount">
                    <div className="ingredient__quantity">${mealData.strMeasure1}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure2}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure3}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure4}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure5}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure6}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure7}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure8}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure9}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure10}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure11}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure12}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure13}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure14}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure15}</div>
                    <div className="ingredient__quantity">${mealData.strMeasure16}</div>
                </div>
            </div>
        </div>
    `;

    recipeContainer.appendChild(meal);
}

// function addToLS(mealId) {
//     const mealIds = getMealsFromLS();

//     localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
// }

// function removeMealFromLS(mealId) {

// }

// function getMealsFromLS() {
//     const mealIds = JSON.parse(localStorage.getItem('mealIds'));

//     return mealIds;
// }



