import React, { useState, useEffect } from "react";

function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`bg-emerald-900 text-white py-6 border-t border-gray-700 w-full  ${
        isAtBottom ? "opacity-100" : "opacity-100 pointer-events-none"
      }`}
    >
      <div className="container mx-auto text-center text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()} تطبيق تتبع السعرات الحرارية. جميع
          الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
