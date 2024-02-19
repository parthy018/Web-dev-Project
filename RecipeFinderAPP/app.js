
const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox");
const recipeContainer = document.querySelector(".recipe-container");
const loadingScreen = document.querySelector(".loading-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");





const fetchRecipe = async (query) => {
    loadingScreen.classList.add('loading');
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json();
    console.log(response);
    loadingScreen.classList.remove('loading');

    console.log(response.meals[0]);
    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
                <img src="${meal.strMealThumb}" width="300" height="300"  >
                <h3>${meal.strMeal}</h3>
                <p> <span>${meal.strArea}</span> Dish</p>
                <p> Belongs to <span>${meal.strCategory}</span> Category</p>
                 `;
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        // adding eventListner to recipe button
        button.addEventListener('click', () => {
            openRecipePopup(meal);
        })
        recipeContainer.appendChild(recipeDiv);     // append at last or in end
    });
}

const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingredients:</h3>
        <ul class="ingredientList" >${fetchIngreadients(meal)}</ul>
        <div  class="recipeInstructions">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
    `
    

    recipeDetailsContent.parentElement.style.display = "block";
}

// function to fetch ingredient  and measurement
    const fetchIngreadients=(meal)=>{
      let ingredientList="";
      for(let i=1;i<=20;i++){
        const ingredient=meal[`strIngredient${i}`];
        if(ingredient){
            const measure=meal[`strMeasure${i}`];
            ingredientList+=`<li>${measure} ${ingredient}`;
        }else{
            break;
        }
      }
      return ingredientList;
    }


recipeCloseBtn.addEventListener('click',()=>{
    recipeDetailsContent.parentElement.style.display="none";
})    

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("search btn pressed");
    const searchInput = searchBox.value.trim();
    fetchRecipe(searchInput);
})
