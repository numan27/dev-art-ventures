"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { useCart } from "../../../context/CartContext";
import styles from "./style.module.scss";
import { trackInitiateCheckout } from "_shared/utils/metaPixel";

const calculateDiscountedPrice = (price: string, discount?: number) => {
  if (!discount) return price;
  const numericPrice = parseInt(price.replace(/[^0-9]/g, ""));
  const discountedPrice = numericPrice - numericPrice * (discount / 100);
  return `PKR ${discountedPrice.toLocaleString()}`;
};

type CartItem = {
  id: number | string;
  name: string;
  price: string;
  size: string;
  image: StaticImageData;
  quantity: number;
  discount?: number;
};

export default function CartSideCanvas({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cartItems, removeFromCart, updateQuantity, calculateSubtotal } =
    useCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling on body when cart is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore scrolling when cart is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Prevent clicks inside the cart from closing it
  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCheckoutClick = () => {
    // Track InitiateCheckout event
    trackInitiateCheckout(
      cartItems.map((item) => ({
        id: item.id.toString(),
        name: item.name,
        price: parseFloat(item.price.replace(/[^0-9.]/g, "")),
        quantity: item.quantity,
      }))
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.cartBackDropContainer} />
      <div
        ref={cartRef}
        className={`${styles.cartMainContainer} ${
          isOpen ? styles.cartShown : styles.cartHidden
        }`}
        onClick={handleCartClick}
      >
        <div className={styles.cartHeader}>
          <h3>Shopping Cart</h3>
          <button onClick={onClose}>&times;</button>
        </div>

        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className={styles.itemDetails}>
                      <h5>{item.name}</h5>
                      <p>Size: {item.size}</p>
                      <div className="flex items-baseline gap-2">
                        {item.discount ? (
                          <p className="text-red-600">
                            {calculateDiscountedPrice(
                              item.price,
                              item.discount
                            )}
                          </p>
                        ) : (
                          <p>{item.price}</p>
                        )}
                      </div>
                      <div className={styles.quantityControls}>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.cartFooter}>
                <div className={styles.subtotal}>
                  <span>Subtotal:</span>
                  <span>
                    PKR{" "}
                    {calculateSubtotal().toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className={styles.cartActions}>
                  <Link
                    href="/cart"
                    className={styles.viewCartButton}
                    onClick={onClose}
                  >
                    View Cart
                  </Link>
                  <Link
                    href="/checkout"
                    className={styles.checkoutButton}
                    onClick={handleCheckoutClick}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
