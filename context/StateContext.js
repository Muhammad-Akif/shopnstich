import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [searchResult, setSearchResult] = useState(null)
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMeasure, setMeasure] = useState(false)
  const [isConfirm, setConfirm] = useState(false)
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "Muhammad Akif",
    email: "akif@gmail.com  ",
    phone: "123",
    age: "123",
    height: "12",
    gender: "male",
    size: "",
    fit: "",
    other: ""
  })
const [measureDetails, setMeasureDetails] = useState({
  menDetails: [
    { image: 'https://www.crowntailor.com/images/menm/men_size_1.jpg', slug:"fullShoulderWidth", title: "FULL SHOULDER WIDTH", description: "Measure from the end of the right shoulder to the end of the left shoulder. We define the 'End of the Shoulder as where the horizontal plane of the shoulder intersects thevertical plane of the arm'" },
    { image: 'https://www.crowntailor.com/images/menm/men_size_2.jpg', slug:"sleeves", title: "SLEEVES", description: "The 'Pinch' of the hand is found where the base of the thumb and the base of the index finger intersect" },
    { image: 'https://www.crowntailor.com/images/menm/men_size_4.jpg', slug:"menWaist", title: "WAIST", description: "Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_3.jpg', slug:"fullChest", title: "FULL CHEST", description: "Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be 'snug'. Make sure the tape is horizontal and theperson's arms are by their side; then take a normal breath and measure. Do not puff out your chest." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_5.jpg', slug:"hipsOrSeat", title: "HIPS/ SEAT", description: "Measure around the fullest part of your hips and buttocks." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_6.jpg', slug:"frontShoulderWidth", title: "FRONT SHOULDER WIDTH", description: "With the person's arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_7.jpg', slug:"backShoulderWidth", title: "BACK SHOULDER WIDTH", description: "With the person's arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_8.jpg', slug:"frontJacketLength", title: "FRONT JACKET LENGTH", description: "Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket" },
    { image: 'https://www.crowntailor.com/images/menm/men_size_9.jpg', slug:"menNeck", title: "NECK", description: "The tape should be comfortably touching the skin, with enough room so that you do not feel restricted." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_10.jpg', slug:"trouserWaist", title: "TROUSER WAIST", description: "Measure around your waist at the level where you would normally wear your pant's belt. With the tape measure snug around your waist, relax, and take the measurement. Don't be alarmed if this measuremen seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_11.jpg', slug:"crotch", title: "CROTCH", description: "Measure from the front top of the pant's waistband to the back top of the pant's waistband." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_12.jpg', slug:"thigh", title: "THIGH", description: "Measure around your thigh at its widest point. You need measure only one side." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_13.jpg', slug:"trousersLength", title: "TROUSER'S LENGTH", description: "Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure." },
    { image: 'https://www.crowntailor.com/images/menm/men_size_14.jpg', slug:"menCuff", title: "CUFF", description: "Measure width around cuff as shown." },
  ],
  womenDetails: [
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_1.jpg', slug:"", title: "FRONT LENGTH", description: "Measure from shoulder seam (at neck) to bust point." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_2.jpg', slug:"", title: "FULL FRONT LENGTH", description: "Measure from shoulder seam (at neck) over bust to waist." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_3.jpg', slug:"", title: "BACK LENGTH", description: "Measure from the collar seam to back waist line." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_4.jpg', slug:"", title: "FRONT WIDTH", description: "Measure from top armpit angle to other armpit angle across the front chest." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_5.jpg', slug:"", title: "BUST", description: "Measure around the biggest part of bust and keep tape a little high on back." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_6.jpg', slug:"", title: "WAIST", description: "Measure around waistline where normally you would wear your pant / skirt." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_7.jpg', slug:"", title: "BACK WIDTH", description: "Measure from top armpit angle to other armpit angle across your back." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_8.jpg', slug:"", title: "POINT BUST", description: "Measure from one point bust to another point bust." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_9.jpg', slug:"", title: "SLEEVE LENGTH", description: "Measure from shoulder seam to wrist." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_10.jpg', slug:"", title: "ARM", description: "Measure around the arm." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_11.jpg', slug:"", title: "ARMHOLE", description: "Measure around the armhole." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_12.jpg', slug:"", title: "NECK", description: "Measure around the neck." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_13.jpg', slug:"", title: "CUFF", description: "Measure around the cuff as shown." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_14.jpg', slug:"", title: "JACKET / BLOUSE LENGTH", description: "Measure from top of highest shoulder point to the length of your jacket design style." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_14.jpg', slug:"", title: "COAT LENGTH", description: "Measure from shoulder seam over bust to coat length." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_16.jpg', slug:"", title: "SKIRT LENGTH", description: "Measure from waist to skirt length." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_17.jpg', slug:"", title: "HIP", description: "Measure around biggest part of hip and seat" },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_18.jpg', slug:"", title: "HIGH HIP", description: "Measure around hips." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_19.jpg', slug:"", title: "INSEAM", description: "Measure from crotch to bottom of cuff." },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_20.jpg', slug:"", title: "TROUSER LENGTH", description: "Measure around biggest part of hip and seat" },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_21.jpg', slug:"", title: "CUFF", description: "Measure around biggest part of hip and seat" },
    { image: 'https://www.crowntailor.com/images/womenw/wmen_size_23.jpg', slug:"", title: "TROUSER THIGH", description: "Measure around the biggest part of the leg." },
  ]
})

let foundProduct;
let index;

const onAdd = (product, quantity) => {
  const checkProductInCart = cartItems.find((item) => item.id === product.id);

  setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

  if (checkProductInCart) {
    const updatedCartItems = cartItems.map((cartProduct) => {
      if (cartProduct.id === product.id) return {
        ...cartProduct,
        quantity: cartProduct.quantity + quantity
      }
    })

    setCartItems(updatedCartItems);
  } else {
    product.quantity = quantity;

    setCartItems([...cartItems, { ...product }]);
  }

  toast.success(`${qty} ${product.name} added to the cart.`);
}

const onRemove = (product) => {
  foundProduct = cartItems.find((item) => item.id === product.id);
  const newCartItems = cartItems.filter((item) => item.id !== product.id);

  setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
  setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
  setCartItems(newCartItems);
}

const toggleCartItemQuanitity = (id, value) => {
  foundProduct = cartItems.find((item) => item.id === id)
  index = cartItems.findIndex((product) => product.id === id);
  const newCartItems = cartItems.filter((item) => item.id !== id)

  if (value === 'inc') {
    setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
  } else if (value === 'dec') {
    if (foundProduct.quantity > 1) {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
    }
  }
}

const incQty = () => {
  setQty((prevQty) => prevQty + 1);
}

const decQty = () => {
  setQty((prevQty) => {
    if (prevQty - 1 < 1) return 1;

    return prevQty - 1;
  });
}

return (
  <Context.Provider
    value={{
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd,
      toggleCartItemQuanitity,
      onRemove,
      setCartItems,
      setTotalPrice,
      setTotalQuantities,
      setMeasureDetails,
      measureDetails,
      isMeasure,
      setMeasure,
      isConfirm,
      setConfirm,
      personalInfo,
      setPersonalInfo,
      searchResult, 
      setSearchResult
    }}
  >
    {children}
  </Context.Provider>
)
}

export const useStateContext = () => useContext(Context);