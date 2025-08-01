import { ReactNode, useRef, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import Image from "next/image";

interface CustomAccordionProps {
  title: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
  nested?: boolean;
}

const CustomAccordion = ({
  title,
  children,
  isOpen,
  onClick,
  nested = false,
}: CustomAccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [children]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [isOpen]);

  const nameParts = title.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div
      className={classNames(styles.accordion, {
        [styles.active]: isOpen,
        [styles.nested]: nested,
      })}
    >
      <div
        className={classNames(styles.accordionHeader, {
          [styles.active]: isOpen,
        })}
        onClick={() => {
          onClick?.();
        }}
      >
        <div className="flex items-center">
          <h5>{title}</h5>
        </div>
        <span
          className={classNames(styles.chevronIcon, {
            [styles.rotate]: isOpen,
          })}
        >
          <Image
            src={isOpen ? Images.MinusIcon.src : Images.PlusIcon.src}
            alt="icon"
            width={20}
            height={20}
          />
        </span>
      </div>
      <div
        className={classNames(styles.accordionContent, {
          [styles.open]: isOpen,
        })}
        style={{
          height: isOpen ? contentHeight : 0,
          overflow: "hidden",
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  );
};

export default CustomAccordion;
