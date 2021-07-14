import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

//TODO: remove the line below for 'useStoreContext. We will use React-Redux to generate state and dispatch method
//import { useStoreContext } from "../../utils/GlobalState";
//TODO: import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";

import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  // Assignment: remove the line below. We will use useDispatch and useSelector to generate state and dispatch
  // const [state, dispatch] = useStoreContext();
  // Assignment: Create a const variable 'dispatch' and assign the returned value from useDispatch()
  //TODO find out if useDispatch should be followed by () or not:  example26 Main/solved has useDispatch with no () following, 
  const dispatch = useDispatch;
  // assignment: create a const varailbe 'state' and assign the returned value from useSelector(...)
  // Hint: search 28-Stu_Mini-Project for how to create the two variables, dispatch and state}
  const state = useSelector(state => state);
  {/* TODO:
    figure out why this did not work
    const categories = useSelector((state) => state.categories);// Hint: search 28-Stu_Mini-Project for how to create the two variables, dispatch and state}
  const [categories, item ] = useState;
  console.log("Catagories:","\n",categories);
  console.log("State:","\n",state);


  
*/}
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };
  //Alert does not like item
  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
