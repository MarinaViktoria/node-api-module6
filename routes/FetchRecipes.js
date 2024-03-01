const { Router } = require('express');
const router = Router();

let recipes = require('../Recipes');

router.get('/', (req, res) => {
    res.json(recipes)
})

router.post('/', (req, res) => {
    const newRecipe = {
        name: req.body.name,
        id: req.body.id,
        price: req.body.price
    }
    recipes.push(newRecipe);
    res.json(recipes);
})

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    let recipeToBrDeleted = recipes.find(recipe => recipe.id === id);
    if (recipeToBrDeleted) {
        res.json({
            message: "Recipe deleted",
            recipes: recipes.filter(recipe => recipe.id !== id)
        })
    }
    else {
        res.status(404).json({
            message: `This recipe doesn't exist`
        })
    }
})
    
router.put('/:name', (req, res) => {
    let { name } = req.params;
    let recipeToBeChanged = recipes.find(recipe => recipe.name === name);

    if (recipeToBeChanged) {
        const updateRecipe = req.body;
        recipes.forEach(recipe => {
            if (recipe.name === req.params.name) {
                recipe.name = updateRecipe ? updateRecipe.name : recipe.name;
                recipe.id = updateRecipe ? updateRecipe.id : recipe.id;
                recipe.price = updateRecipe ? updateRecipe.price : recipe.price;
                res.json({
                    message: "Recipe changed", recipe})
            }
        })
    }
    else {
        res.status(404).json({
            message: `This recipe doesn't exist`})
            } 
}) 

module.exports = router;