class Meal {
    food: string;
    total: number;

    constructor(food: string, total: number) {
        this.food = food;
        this.total = total;
    }
}

function order(meal: Meal) {
    return "I want " + meal.total + " " + meal.food;
}

var myMeal = new Meal("hamburger", 3);

document.body.innerHTML = order(myMeal);