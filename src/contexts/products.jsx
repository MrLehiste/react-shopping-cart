import React, { useReducer, createContext } from "react";
import axios from "axios";

const initialState = {
  products: null,
  isLoading: false,
  isLoaded: false
};

export const ProductsStateContext = createContext();
export const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        products: null,
        isLoading: false,
        isLoaded: false
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};

export const getProducts = (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST"
  });

  var product_data = [
    {
      "id": 1,
      "name": "Brocolli - 1 Lb",
      "price": 12.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      "category": "vegetables"
    },
    {
      "id": 2,
      "name": "Cauliflower - 1 Lb",
      "price": 6.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
      "category": "vegetables"
    },
    {
      "id": 3,
      "name": "Cucumber - 1 Lb",
      "price": 4.8,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
      "category": "vegetables"
    },
    {
      "id": 4,
      "name": "Beetroot - 1 Lb",
      "price": 3.2,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
      "category": "vegetables"
    },
    {
      "id": 5,
      "name": "Carrot - 1 Lb",
      "price": 2.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
      "category": "vegetables"
    },
    {
      "id": 6,
      "name": "Tomato - 1 Lb",
      "price": 1.6,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
      "category": "vegetables"
    },
    {
      "id": 7,
      "name": "Beans - 1 Lb",
      "price": 8.2,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
      "category": "vegetables"
    },
    {
      "id": 8,
      "name": "Eggplant - 1 Lb",
      "price": 3.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
      "category": "vegetables"
    },
    {
      "id": 9,
      "name": "Capsicum",
      "price": 6.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
      "category": "vegetables"
    },
    {
      "id": 10,
      "name": "Mushroom - 1 Lb",
      "price": 7.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
      "category": "vegetables"
    },
    {
      "id": 11,
      "name": "Potato - 1 Lb",
      "price": 2.2,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
      "category": "vegetables"
    },
    {
      "id": 12,
      "name": "Pumpkin - 1 Lb",
      "price": 4.8,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
      "category": "vegetables"
    },
    {
      "id": 13,
      "name": "Corn - 1 Lb",
      "price": 7.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
      "category": "vegetables"
    },
    {
      "id": 14,
      "name": "Onion - 1 Lb",
      "price": 1.6,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
      "category": "vegetables"
    },
    {
      "id": 15,
      "name": "Apple - 1 Lb",
      "price": 7.2,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
      "category": "fruits"
    },
    {
      "id": 16,
      "name": "Banana - 1 Lb",
      "price": 4.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
      "category": "fruits"
    },
    {
      "id": 17,
      "name": "Grapes - 1 Lb",
      "price": 6.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
      "category": "fruits"
    },
    {
      "id": 18,
      "name": "Mango - 1 Lb",
      "price": 7.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
      "category": "fruits"
    },
    {
      "id": 19,
      "name": "Musk Melon - 1 Lb",
      "price": 3.6,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
      "category": "fruits"
    },
    {
      "id": 20,
      "name": "Orange - 1 Lb",
      "price": 7.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
      "category": "fruits"
    },
    {
      "id": 21,
      "name": "Pears - 1 Lb",
      "price": 6.9,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
      "category": "fruits"
    },
    {
      "id": 22,
      "name": "Pomegranate - 1 Lb",
      "price": 9.5,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
      "category": "fruits"
    },
    {
      "id": 23,
      "name": "Raspberry - 1 Lb",
      "price": 16.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
      "category": "fruits"
    },
    {
      "id": 24,
      "name": "Strawberry - 1/4 Lb",
      "price": 18.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
      "category": "fruits"
    },
    {
      "id": 25,
      "name": "Water Melon - 1 Lb",
      "price": 2.8,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
      "category": "fruits"
    },
    {
      "id": 26,
      "name": "Almonds - 1/4 Lb",
      "price": 20.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
      "category": "nuts"
    },
    {
      "id": 27,
      "name": "Pista - 1/4 Lb",
      "price": 19.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
      "category": "nuts"
    },
    {
      "id": 28,
      "name": "Nuts Mixture - 1 Lb",
      "price": 9.50,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/nuts-mixture.jpg",
      "category": "nuts"
    },
    {
      "id": 29,
      "name": "Cashews - 1 Lb",
      "price": 12.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
      "category": "nuts"
    },
    {
      "id": 30,
      "name": "Walnuts - 1/4 Lb",
      "price": 17.0,
      "image": "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/walnuts.jpg",
      "category": "nuts"
    }
  ]

  const url =
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: {
          products: product_data //response.data
        }
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: "GET_PRODUCTS_FAILURE"
      });
    });
};

export default ProductsProvider;
