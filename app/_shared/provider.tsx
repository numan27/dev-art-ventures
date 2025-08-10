"use client";
import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { Next13ProgressBar } from "next13-progressbar";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { CartProvider } from "./context/CartContext";
import { TranslationProvider } from "./context/TranslationContext";
import { usePathname } from "next/navigation";

const CustomProvider = ({ children }: any) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000,
      delay: 0,
      once: false,
      mirror: true,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    const handleLoad = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div>
      <Next13ProgressBar
        height="4px"
        color="linear-gradient(rgb(97, 77, 255) 0%, rgb(64, 25, 255) 100%)"
        options={{ showSpinner: false }}
        showOnShallow
      />
      <CartProvider>
        <TranslationProvider>
          <CookiesProvider>{children}</CookiesProvider>
        </TranslationProvider>
      </CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CustomProvider;
