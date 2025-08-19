"use client";
import classNames from "classnames";
import { useEffect, useId, useState } from "react";
import OptionsDropDown from "../options";
import styles from "./style.module.scss";
import { getLeftPosition, getTopPosition } from "utils/helper";
import { LuChevronDown } from "react-icons/lu";

interface OptionProps {
  title: string;
  action: (value: any) => void;
  Icon?: JSX.Element;
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  notRequiredMargin?: boolean;
  customLabelStyle?: any;
  customInputContainer?: any;
  customOptionsContainer?: any;
  customIconStyle?: any;
  readOnlyColor?: string;
  options: OptionProps[];
  direction?: "top" | "bottom";
  wrapInGlobalWrapper?: boolean;
  isLanguageDropdown?: boolean;
  customDropdownMenu?: JSX.Element;
}

const CustomDropdown = ({
  label,
  required,
  error,
  value,
  placeholder,
  notRequiredMargin,
  customLabelStyle,
  customInputContainer,
  customOptionsContainer,
  customIconStyle,
  readOnly,
  readOnlyColor,
  options,
  tabIndex,
  direction = "top",
  wrapInGlobalWrapper = true,
  isLanguageDropdown = false,
  customDropdownMenu,
}: InputProps) => {
  const [openProfileDropDown, setOpenDropDown] = useState<boolean>(false);
  const uid = useId();

  useEffect(() => {
    if (openProfileDropDown && wrapInGlobalWrapper) {
      const elem = document.getElementById(
        `custom-select-container-${uid}`
      ) as HTMLDivElement;

      if (isLanguageDropdown) {
        // For language dropdown, position the custom menu
        const customMenu = elem.querySelector(
          '[class*="customOptionsContainer"]'
        ) as HTMLDivElement;
        if (elem && customMenu) {
          const rect = elem.getBoundingClientRect();
          const topPosition = rect.bottom + 10; // Add 10px gap
          const leftPosition = rect.left;

          customMenu.style.position = "fixed";
          customMenu.style.top = topPosition + "px";
          customMenu.style.left = leftPosition + "px";
          customMenu.style.width = Math.max(elem.clientWidth, 220) + "px"; // Ensure minimum width
          customMenu.style.zIndex = "2147483647";
        }
      } else {
        // For regular dropdown, position the OptionsDropDown
        const optionsDropDown: HTMLDivElement | null = document.getElementById(
          `custom-select-dropdown-${uid}`
        ) as HTMLDivElement;
        if (elem && optionsDropDown) {
          const topPosition = getTopPosition(elem);
          const leftPosition = getLeftPosition(elem);
          if (direction === "top") {
            optionsDropDown.style.top =
              Number(topPosition + elem?.clientHeight) + "px";
          } else {
            optionsDropDown.style.top =
              Number(topPosition - optionsDropDown?.clientHeight + 20) + "px";
          }

          optionsDropDown.style.left = leftPosition + "px";
          optionsDropDown.style.width = elem?.clientWidth + "px";
        }
      }
    }
    // eslint-disable-next-line
  }, [openProfileDropDown, isLanguageDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const container = document.getElementById(
        `custom-select-container-${uid}`
      );

      if (container && !container.contains(target)) {
        setOpenDropDown(false);
      }
    };

    if (openProfileDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProfileDropDown, uid]);

  return (
    <div
      className={classNames(
        "relative w-full",
        notRequiredMargin ? "" : error ? "mb-0" : "mb-3"
      )}
      id={`custom-select-container-${uid}`}
      style={{ position: "relative" }}
    >
      <div className="flex flex-col items-start w-full gap-2">
        {label ? (
          <label
            className={classNames(
              styles.inputLabel,
              customLabelStyle && customLabelStyle
            )}
          >
            {label} {!!required && <label className={styles.asterik}>*</label>}
          </label>
        ) : null}

        <div
          className={classNames(
            styles.inputContainer,
            readOnly ? styles.readonly : "",
            customInputContainer && customInputContainer,
            "w-full flex justify-between items-center gap-2 cursor-pointer relative"
          )}
          style={readOnlyColor ? { background: readOnlyColor } : {}}
          onClick={() => {
            setOpenDropDown(true);
          }}
        >
          <span
            className={classNames(value ? styles.value : styles.placeholder)}
          >
            {value ? value : placeholder}
          </span>
          <span
            className="flex items-center justify-center"
            style={{ lineHeight: 0 }}
          >
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <LuChevronDown
                  className={classNames(customIconStyle, styles.iconStyle)}
                />
              </div>
            </div>
          </span>
        </div>

        {isLanguageDropdown && openProfileDropDown ? (
          <div className={classNames(styles.customOptionsContainer)}>
            <div className="flex flex-col gap-2">
              {options.map((option) => (
                <div
                  key={option.title}
                  onClick={() => {
                    option.action(option.title);
                    setOpenDropDown(false);
                  }}
                  className={styles.dropdownItem}
                >
                  <span className={styles.dropdownItemTitle}>
                    {option.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <OptionsDropDown
            id={`custom-select-dropdown-${uid}`}
            options={options}
            openSelection={openProfileDropDown}
            setOpenSelection={setOpenDropDown}
            customContainer={classNames(
              styles.optionsContainer,
              customOptionsContainer
            )}
            tabIndex={tabIndex}
            wrapInGlobalWrapper={wrapInGlobalWrapper}
          />
        )}
      </div>
      {!!error && <div className={classNames(styles.error)}>{error}</div>}
    </div>
  );
};

export default CustomDropdown;
