import React, { useContext } from "react";
import "../style/recipeSearch.css";

function RecipeSearch() {
  return (
    <>
      <body class="bg">
        {/* <!--Top Navigation Bar--> */}

        <nav classname="warpper" role="navigation">
          <div classname="container" id="navigation_bar">
            <a href="#">
              <i
                classname="small fa fa-cutlery modal-trigger tooltipped"
                data-position="bottom"
                data-tooltip="Click to view saved recipes"
                data-delay="30"
                href="#recipe-box-modal"
                id="recipe-box-btn"
              ></i>
            </a>
            <ul classname="right navbar_list">
              <li>
                <p id="member-info"></p>
              </li>
              <li>
                <a
                  href="#logout-confirm-modal"
                  classname="waves-effect waves-light btn card modal-trigger right"
                  id="logout-btn"
                  onclick="logOut()"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Modal Structure. This is the log in confirmation screen --> */}
        <div id="login-confirm-modal" classname="modal black-text">
          <div classname="modal-content">
            <h4>Logged in</h4>
            <p>
              You are currently logged in to the app. To log out, click LOG OUT.
            </p>
            <a
              classname="waves-effect waves-light btn card modal-action modal-close right"
              id="login-confirm-btn"
            >
              Close
            </a>
          </div>
        </div>

        {/* <!-- Modal Structure. This is the logged out confirmation screen --> */}
        <div id="logout-confirm-modal" classname="modal black-text">
          <div classname="modal-content">
            <h4>Logged out</h4>
            <p>
              You have logged out of the app. To log in again, click LOG IN.
            </p>
            <p>
              You must be logged in to see your saved recipes in your Recipe
              box.
            </p>
            <a
              classname="waves-effect waves-light btn card modal-action modal-close right"
              id="logout-confirm-btn"
            >
              Close
            </a>
          </div>
        </div>
        <main>
          <div classname="container">
            <div classname="row">
              {/* <!--Main recipe search field. Only show when user is logged in.--> */}
              <div classname="col s12 loggedin-content">
                <h5>Find something to make:</h5>
                <div classname="input-field">
                  <input
                    id="user-input"
                    type="text"
                    classname="validate"
                  ></input>
                  <label for="text" data-error="wrong" data-success="right">
                    for example, pizza
                  </label>
                  <button
                    classname="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    id="submit"
                  >
                    Find
                  </button>
                </div>
              </div>

              {/* <!--Show start screen when user is logged out--> */}
              <div classname="col s12" id="start-screen">
                <h4 classname="center-align start-screen-font">
                  Welcome to YourRecipeAssistant
                </h4>
                <div classname="input-field">
                  <input
                    id="email-input"
                    classname="validate"
                    type="email"
                    placeholder="jdoe@gmail.com"
                  ></input>
                  <label for="email" data-error="wrong" data-success="right">
                    Email
                  </label>
                  <input
                    id="password-input"
                    classname="validate"
                    type="password"
                  ></input>
                  <label for="userPassword">Password</label>
                </div>
                <br />
                <br />
                <a
                  classname="waves-effect waves-light btn card"
                  id="login-btn"
                  onclick="login()"
                >
                  Log in
                </a>
                <a
                  classname="waves-effect waves-light btn card right"
                  id="signup-btn"
                  onclick="signUp()"
                >
                  Sign Up
                </a>
                <p id="error"></p>
              </div>
            </div>

            {/* <!--Recipe search results section. Only show when user is logged in. The recipe data that we receive from the jQuery AJAX request will be dumped here.--> */}
            <div classname="row">
              <div classname="col s12 loggedin-content">
                <div id="recipe-list" classname="section">
                  <div id="recipe1" classname="col l4 m6 s12"></div>
                  <div id="recipe2" classname="col l4 m6 s12"></div>
                  <div id="recipe3" classname="col l4 m6 s12"></div>
                </div>
              </div>
            </div>
            <div classname="row">
              <div classname=" \col s12">
                <div classname="col s4">
                  <div classname="col s4">
                    <button
                      classname="btn waves-effect waves-light col s4"
                      type="submit"
                      name="action"
                      id="load-more"
                    >
                      Load More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal Structure. This is the bottom sheet modal that will be used as our recipe box, which holds user saved recipes. --> */}
            <div id="recipe-box-modal" classname="modal bottom-sheet">
              <div classname="modal-content">
                <div classname="section">
                  {/* <!--Add close icon to modal--> */}
                  <i classname="material-icons right modal-action modal-close">
                    close
                  </i>
                  <h4>Recipe box</h4>
                  {/* <!--Recipe box - where saved recipes will go--> */}
                  <h5 id="recipeBox"></h5>
                  {/* <!--Recipe box disclaimer - must be logged in to use this feature--> */}
                  <p id="disclaimer">You need to LOG IN to use this feature.</p>
                </div>

                {/* <!--Close recipe box--> */}
                <div classname="modal-footer">
                  <a
                    href="#!"
                    classname="modal-action modal-close waves-effect waves-green btn-flat"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Modal Structure --> */}
            <div id="notes-modal" classname="modal">
              <div classname="modal-content">
                <h4>Notes for Recipe</h4>
                <div classname="input-field recipe-notes">
                  <input
                    id="notes-input"
                    type="text"
                    classname="validate"
                  ></input>
                  <label for="text" data-error="wrong" data-success="right">
                    Enter notes for recipes (add recipe name):
                  </label>
                  <button
                    classname="btn waves-effect waves-light modal-trigger"
                    type="submit"
                    name="action"
                    id="submit-notes"
                    data-target="notes-modal"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div classname="modal-footer">
                <a
                  href="#!"
                  classname="modal-action modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
              </div>
            </div>

            {/* <!-- Modal Trigger. This is a confirmation modal that appears when the user clicks the trash can icon. --> */}
            <div id="removeRecipeModal" classname="modal ">
              <div classname="modal-content">
                <h4>Are you sure you want remove?</h4>
                <p>
                  Removing a recipe permanently removes it from the Recipe box.
                  Are you sure?
                </p>
              </div>
              <div classname="modal-footer">
                <a
                  href="#!"
                  classname="modal-action modal-close waves-effect waves-green btn-flat"
                  id="yes-remove"
                >
                  Remove
                </a>
                <a
                  href="#!"
                  classname="modal-action modal-close waves-effect waves-green btn-flat"
                  id="no-remove"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* <!--Footer and Copyright information--> */}
        <footer classname="page-footer">
          <div classname="container">
            <div classname="row">
              <div classname="col l6 s12">
                <h5 classname="white-text">YourRecipeAssistant</h5>
                <p classname="grey-text text-lighten-4">© 2020 DudeDevs</p>
              </div>
              <div classname="col l4 offset-l2 s12">
                <ul>
                  <li>
                    <a
                      classname="grey-text text-lighten-3"
                      href="#!"
                      id="about-link"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      classname="grey-text text-lighten-3"
                      href="#!"
                      id="help-link"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!--About screen--> */}
            <div id="about-modal" classname="modal">
              <div classname="modal-content black-text">
                <h4>About</h4>
                <p>
                  <b>Your-Reciepe-Assistant</b>
                </p>
                <p>Version 01.00.00</p>
                <p>© 2020 DudeDevs</p>
              </div>
              <div classname="modal-footer">
                <a
                  href="#!"
                  classname="modal-action modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </a>
              </div>
            </div>

            {/* <!--Help Link in Footer of app--> */}
            <div id="help-modal" classname="modal">
              <div classname="modal-content">
                {/* <!--Add close icon to modal--> */}
                <i classname="material-icons right modal-action modal-close black-text">
                  close
                </i>
                <h5 classname="black-text text-darken-2">Help</h5>
                <ul
                  classname="collapsible black-text"
                  data-collapsible="accordion"
                >
                  <li>
                    <div classname="collapsible-header">
                      What is YourRecipeAssistant?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        Are you having guests over for dinner and don't know
                        what to make? Do you have ingredients in your fridge and
                        don't know what to do with them?
                      </span>
                      <p>
                        YourRecipeAssistant allows you to find interesting, fun
                        recipes for the food item or dish that you really want
                        to make.
                      </p>
                      <p>With this app, you can:</p>
                      <ul>
                        <li>Search for recipes from a variety of sources.</li>
                        <li>
                          Find out what ingredients you need to make a recipe.
                        </li>
                        <li>
                          Favorite a recipe so that you can view it later.
                        </li>
                        <li>Unfavorite a recipe.</li>
                        <li>Add your own personal notes to a recipe.</li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      How do I search for recipes?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        To search for a recipe, enter the name of the food in
                        the <b>Find something to make</b> search field.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      How can I find out the ingredients needed for a recipe?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        To see a list of ingredients for a recipe, click the{" "}
                        <i classname="material-icons">more_vert</i> icon next to
                        that recipe in the search results.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      How do I favorite a recipe?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        If you find a recipe that you really like and want to
                        save it to view later, you can favorite it.
                      </span>
                      <p>
                        To favorite a recipe, click the{" "}
                        <i classname="small fa fa-cutlery"></i> icon next to the
                        recipe you want to favorite.
                      </p>
                      <p>
                        After you favorite a recipe, it will be added to the{" "}
                        <b>Recipe box</b>. To open the <b>Recipe box</b>, click
                        the <i classname="small fa fa-cutlery"></i> icon in the
                        top navigation bar.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      Where can I view my favorite recipes?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        You can view your favorite recipes in the{" "}
                        <b>Recipe box</b>. To open the <b>Recipe box</b>, click
                        the <i classname="small fa fa-cutlery"></i> icon in the
                        top navigation bar. You need to be logged in to the app
                        to see your favorite recipes.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      How do I remove a recipe from my favorites?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        You can remove a saved recipe from the <b>Recipe box</b>
                      </span>
                      <ol>
                        <li>
                          To open the <b>Recipe box</b>, click the{" "}
                          <i classname="small fa fa-cutlery"></i> icon in the
                          top navigation bar.
                        </li>
                        <li>
                          Click the <i classname="small fa fa-trash"></i> icon
                          next to the recipe you want to remove.
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      How do I add notes to a favorite recipe?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        You can add notes to a recipe from the <b>Recipe box</b>
                        . Click the <i classname="small fa fa-pencil"></i> icon
                        next to the recipe you want to edit.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div classname="collapsible-header">
                      Who created the app?
                    </div>
                    <div classname="collapsible-body">
                      <span>
                        The app was created by some awesome Devs in Houston
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div classname="modal-footer">
                <a
                  href="#!"
                  classname="modal-action modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default RecipeSearch;
