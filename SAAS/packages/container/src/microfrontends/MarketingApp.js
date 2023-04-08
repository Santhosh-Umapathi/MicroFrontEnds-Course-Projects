import { mount } from "@marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Making use of MarketingApp's mount function inside React
export default () => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Container noticed navigation in Marketing", pathname);
        // Getting current pathname from history
        const { pathname } = history.location;

        // Preventing infinite loop
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
    });

    // Handling Container navigation events inside Marketing
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
