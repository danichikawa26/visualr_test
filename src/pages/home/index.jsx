import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import Tabs from "../../components/tabs";
import SearchInput from "../../components/searchInput";
import DishesList from "../../components/dishesList";
import OrderSection from "../../components/orderDetails/orderSection";
import PaymentSection from "../../components/paymentSection";
import { menuItems, categories, allDishes } from "../../service/data";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [dishes, setDishes] = useState(allDishes);
  const [order, setOrder] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPaymentSectionVisible, setIsPaymentSectionVisible] = useState(false);

  const addToOrder = dishToAdd => {
    setOrder(prevOrder => {
      const existingDish = prevOrder.find(item => item.id === dishToAdd.id);

      if (existingDish) {
        return prevOrder.map(item =>
          item.id === dishToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevOrder, { ...dishToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = itemId => {
    setOrder(prevOrder => prevOrder.filter(item => item.id !== itemId));
  };

  const handleSearchChange = term => {
    setSearchTerm(term);
    if (term) {
      const filteredDishes = dishes.filter(dish =>
        dish.name.toLowerCase().includes(term.toLowerCase())
      );
      setDishes(filteredDishes);
    } else {
      setDishes(dishes);
    }
  };

  const confirmOrder = () => {
    setIsPaymentSectionVisible(true);
  };
  const totalCost = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmitPayment = event => {
    event.preventDefault();

    const paymentDetails = {
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    };

    const isValid = validatePaymentDetails(paymentDetails);
    if (!isValid) {
      return;
    }

    processPayment(paymentDetails)
      .then(response => {})
      .catch(error => {});
  };

  const validatePaymentDetails = details => {
    return true;
  };

  const processPayment = details => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Payment successful"), 1000);
    });
  };

  useEffect(() => {
    setDishes(
      allDishes.filter(dish => dish.categories.includes(parseInt(activeTab)))
    );
  }, [activeTab]);

  return (
    <div className="homepage-container">
      <div className="main-content flex h-screen">
        <SideBar
          onSelectMenuItem={setSelectedMenuItem}
          menuItems={menuItems}
          selectedItem={selectedMenuItem}
        />
        <div className="content flex-grow bg-blue p-5">
          <Header />
          <Tabs
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            tabs={categories}
          />
          <DishesList dishes={dishes} onAddToOrder={addToOrder} />
        </div>
        <OrderSection
          items={order}
          total={totalCost}
          onRemoveItem={removeFromOrder}
          onConfirm={confirmOrder}
        />
        {isPaymentSectionVisible && <PaymentSection />}
      </div>
    </div>
  );
};

export default HomePage;
