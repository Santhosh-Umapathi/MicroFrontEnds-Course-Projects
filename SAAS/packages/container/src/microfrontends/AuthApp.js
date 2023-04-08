import { mount } from "@auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

// Making use of AuthApp's mount function inside React
export default ({ onSignIn }) => {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Container noticed navigation in Auth", pathname);
        // Getting current pathname from history
        const { pathname } = history.location;

        // Preventing infinite loop
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn,
    });

    // Handling Container navigation events inside Auth
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
