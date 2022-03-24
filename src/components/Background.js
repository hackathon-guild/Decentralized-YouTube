//Background.js
import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-grey dark:bg-backgroundBlack h-screen  transition-all">
      {children}
    </body>
  );
};

export default Background;
