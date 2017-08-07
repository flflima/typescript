var Meal = (function () {
    function Meal(food, total) {
        this.food = food;
        this.total = total;
    }
    return Meal;
}());
function order(meal) {
    return "I want " + meal.total + " " + meal.food;
}
var myMeal = new Meal("hamburger", 3);
document.body.innerHTML = order(myMeal);
