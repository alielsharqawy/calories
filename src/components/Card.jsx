import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-lightBg dark:bg-gray-800 transition-all shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
