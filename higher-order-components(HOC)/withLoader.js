import React, { useState, useEffect } from "react";
const withLoader = (WrappedComponent, data) => {
  return function withLoadeComponent(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setItems(data);
        setIsLoaded(true);
      }, 2000);
    }, []);

    if (!isLoaded) {
      return <div>Loading....</div>;
    }
    return <WrappedComponent />;
  };
};
export default withLoader
