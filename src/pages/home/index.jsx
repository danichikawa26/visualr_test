import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import Tabs from "../../components/tabs";
import SearchInput from "../../components/searchInput";
import DishesList from "../../components/dishesList";
import OrderSection from "../../components/orderDetails/orderSection";
// Import other necessary components and icons here

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0); // For tabs
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // State to hold the selected menu item
  const [dishes, setDishes] = useState([]); // Array of dishes
  const [order, setOrder] = useState([]); // Current order
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [isPaymentSectionVisible, setIsPaymentSectionVisible] = useState(false);

  const addToOrder = dishToAdd => {
    setOrder(prevOrder => {
      // Check if the dish is already in the order
      const existingDish = prevOrder.find(item => item.id === dishToAdd.id);

      if (existingDish) {
        // If it exists, increase the quantity
        return prevOrder.map(item =>
          item.id === dishToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it doesn't exist, add the dish with quantity 1
        return [...prevOrder, { ...dishToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = itemId => {
    setOrder(prevOrder => prevOrder.filter(item => item.id !== itemId));
  };

  const handleSearchChange = term => {
    setSearchTerm(term);

    // Optional: Filter the dishes list based on the search term
    // Assuming 'allDishes' holds all available dishes
    if (term) {
      const filteredDishes = allDishes.filter(dish =>
        dish.name.toLowerCase().includes(term.toLowerCase())
      );
      setDishes(filteredDishes);
    } else {
      // If search term is empty, reset to the full list
      setDishes(allDishes);
    }
  };

  const confirmOrder = () => {
    // Perform any checks or preparations before confirming the order
    // ...

    // Show the Payment Section
    setIsPaymentSectionVisible(true);
  };
  const totalCost = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmitPayment = event => {
    event.preventDefault();

    // Extract payment details from state or form fields
    const paymentDetails = {
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    };

    // Validate payment details
    const isValid = validatePaymentDetails(paymentDetails);
    if (!isValid) {
      // Handle invalid payment details (e.g., show error messages)
      return;
    }

    // Process the payment
    processPayment(paymentDetails)
      .then(response => {
        // Handle successful payment (e.g., navigate to success page, clear cart)
      })
      .catch(error => {
        // Handle payment errors (e.g., show error message)
      });
  };

  // Dummy validation function (implement actual validation logic)
  const validatePaymentDetails = details => {
    // Validate card number, expiry date, cvv, etc.
    return true; // return false if validation fails
  };

  // Dummy process payment function (replace with actual API call or payment processing logic)
  const processPayment = details => {
    // Simulate a payment processing call
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Payment successful"), 1000);
    });
  };

  return (
    <div className="homepage-container">
      <Header />
      <div className="main-content flex">
        <SideBar onSelectMenuItem={setSelectedMenuItem} />
        <div className="content flex-grow">
          <Tabs activeTab={activeTab} onSelectTab={setActiveTab} />
          <SearchInput value={searchTerm} onSearchChange={handleSearchChange} />
          <DishesList dishes={dishes} onAddToOrder={addToOrder} />
        </div>
        <OrderSection
          items={order}
          total={totalCost}
          onRemoveItem={removeFromOrder}
          onConfirm={confirmOrder}
        />
        {isPaymentSectionVisible && (
          <PaymentSection /* Pass necessary props here */ />
        )}
      </div>
    </div>
  );
};

export default HomePage;
