"use client";

import { Icons } from "assets";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

interface OptionProps {
  title: string;
  action: () => void;
}

interface CustomSelectProps {
  label?: string;
  selectedItem?: string | any;
  required?: boolean;
  options: OptionProps[];
  defaultActiveItem?: string;
  activeItem?: string;
  customDropdownMenu?: string;
  onChange?: (selected: string) => void | any;
  error?: string;
  placeholder?: string;
  notRequiredMargin?: boolean;
}

const CustomSelect = ({
  options,
  label,
  required,
  customDropdownMenu,
  notRequiredMargin,
  defaultActiveItem = "",
  activeItem: externalActiveItem,
  selectedItem,
  onChange,
  error,
  placeholder,
}: CustomSelectProps) => {
  const [openSelection, setOpenSelection] = useState(false);
  const [activeItem, setActiveItem] = useState(
    selectedItem || externalActiveItem || defaultActiveItem
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedItem) {
      setActiveItem(selectedItem);
    } else if (externalActiveItem) {
      setActiveItem(externalActiveItem);
    }
  }, [selectedItem, externalActiveItem]);

  const handleOptionClick = (title: string, action: () => void) => {
    setActiveItem(title);
    if (onChange) {
      onChange(title);
    } else if (action) {
      action();
    }
    setOpenSelection(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenSelection(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Debug logging
  console.log("CustomSelect render:", {
    openSelection,
    activeItem,
    selectedItem,
    externalActiveItem,
    options: options.length,
    hasOnChange: !!onChange,
  });

  return (
    <div
      className={classNames(
        "relative w-full",
        notRequiredMargin ? "" : error ? "mb-0" : "mb-3",
        styles.customDropdownMenu ? customDropdownMenu : ""
      )}
      ref={dropdownRef}
    >
      <div className="flex flex-col items-start w-full gap-2">
        {label && (
          <label className={styles.inputLabel}>
            {label}{" "}
            {!!required && (
              <label className={classNames(styles.asterik)}>*</label>
            )}
          </label>
        )}
        <div className={classNames(styles.sortContainer, "w-full")}>
          {activeItem ? (
            <div
              className={classNames(
                styles.sortLabel,
                "flex items-center justify-between cursor-pointer"
              )}
              onClick={() => {
                console.log("Clicking dropdown, current state:", openSelection);
                setOpenSelection(!openSelection);
              }}
            >
              <span>{activeItem}</span>
              <Icons.ChevDown />
            </div>
          ) : (
            <div
              className={classNames(
                styles.placeholderStyle,
                "flex items-center justify-between cursor-pointer"
              )}
              onClick={() => {
                console.log("Clicking dropdown, current state:", openSelection);
                setOpenSelection(!openSelection);
              }}
            >
              <span>{placeholder}</span>
              <Icons.ChevDown />
            </div>
          )}

          {openSelection && (
            <div
              className={classNames(styles.dropdown, customDropdownMenu)}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "red",
                color: "white",
                padding: "20px",
                zIndex: 9999,
                minWidth: "200px",
              }}
            >
              <div style={{ color: "white", padding: "10px" }}>
                DEBUG: Dropdown is open! openSelection: {String(openSelection)}
              </div>
              {options.map((option) => (
                <div
                  key={option.title}
                  className={classNames(styles.optionItem, {
                    [styles.active]: option.title === activeItem,
                  })}
                  onClick={() => handleOptionClick(option.title, option.action)}
                  style={{
                    padding: "10px",
                    border: "1px solid white",
                    margin: "5px 0",
                  }}
                >
                  {option.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {!!error && <div className="error">{error}</div>}
    </div>
  );
};

export default CustomSelect;
