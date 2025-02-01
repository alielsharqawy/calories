// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} تطبيق تتبع السعرات الحرارية. جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
