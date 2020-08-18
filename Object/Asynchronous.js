/*
const first=()=> {
    console.log('first hi');
}
const second=()=> {
    first();
    setTimeout(()=> {
        console.log('hey there');
    }, 2000)
}
second();
*/



const getRecipe = () => {
    setTimeout(() => {
        const recipeID = [122, 133, 455, 566];
        console.log(recipeID);
        setTimeout((id) => {
            const recipe = { title: 'panir kulche', publishier: 'Rathore' }
            console.log(`${id}: ${recipe.title}`)
        }, 1500, recipeID[2]);
    }, 2000);
}
getRecipe();
