import { mount } from "@dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

// Making use of AuthApp's mount function inside React
export default ({}) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
