"use client";
import classNames from "classnames";
import Spinner from "../spinner";
import styles from "./style.module.scss";
import { Icons } from "assets";

interface BtnProps extends React.HTMLProps<HTMLButtonElement> {
  containerStyle: any;
  whiteButton: boolean;
  heroBannerButton: boolean;
  Icon: any;
  iconStyle: any;
  IconDirection: string;
  disabled?: boolean;
  loading?: boolean;
  titleStyle?: any;
}

const CustomButton = ({
  title,
  onClick,
  containerStyle,
  whiteButton,
  heroBannerButton,
  Icon,
  iconStyle,
  IconDirection,
  disabled,
  style,
  loading,
  titleStyle,
}: Partial<BtnProps>) => {
  const direction = {
    left: "left",
    right: "right",
  };
  return (
    <button
      className={classNames(
        styles.customBtnContainer,
        containerStyle,
        { [styles.whiteButtonContainer]: whiteButton },
        { [styles.heroBannerButtonContainer]: heroBannerButton },
        "w-fit"
      )}
      onClick={onClick}
      disabled={disabled}
      type="submit"
      style={style}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex items-center w-fit">
          <span className={classNames(styles.buttonContent)}>
            {IconDirection === direction.left ? (
              Icon ? (
                <Icon className={iconStyle ? iconStyle : "mr-2"} />
              ) : null
            ) : null}
            <span className={classNames(titleStyle)}>{title}</span>
            {IconDirection === direction.right ? (
              Icon ? (
                <Icon className={iconStyle ? iconStyle : "ml-1"} />
              ) : null
            ) : null}
          </span>

          <span className={classNames(styles.arrowContainer)}>
            <Icons.ArrowRight />
          </span>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
