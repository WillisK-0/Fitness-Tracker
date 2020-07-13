import React, { useState, useEffect } from 'react'

const RecipeContext = React.createContext()
const app_id = `42e1ae5f`
const apiKey = `86b213cc8f1e55dc3ff546ec02e96ef1`
let api = `https://cors-anywhere.herokuapp.com/http://api.edamam.com/search?q=chicken&app_id=${app_id}}&app_key=${apiKey}&from=0&to=3&calories=591-722&health=alcohol-free`
const RecipeProvider = (props) => {
  let url = `https://api.edamam.com/search?key=${apiKey}`
  const [showHomeButton, setShowHomeButton] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchRecipe = async () => {
    try {
      const recipeData = await fetch(api)
      const { recipes } = await recipeData.json()
      setRecipes(recipes)
      setLoading(false)
      console.log(recipes)
    } catch (e) {
      if (e) {
        console.log(e.message, 'Try updating the API key in App.js')
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const searchUrl = `${url}&q=${search}`
      const searchedRecipeData = await fetch(searchUrl)
      const { recipes } = await searchedRecipeData.json()
      setRecipes(recipes)
      setLoading(false)
      setShowHomeButton(true)
    } catch (e) {
      console.log(e)
    }
  }
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleReturnHome = () => {
    fetchRecipe()
    setShowHomeButton(false)
  }

  useEffect(() => {
    fetchRecipe()

  }, [])

  return (
    <RecipeContext.Provider value={{
      loading,
      search,
      showHomeButton,
      recipes,
      handleSearchChange,
      handleSubmit,
      handleReturnHome,
    }}>
      {props.children}
    </RecipeContext.Provider>
  )
}
const RecipeConsumer = RecipeContext.Consumer
export { RecipeProvider, RecipeConsumer, RecipeContext }
