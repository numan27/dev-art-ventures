"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import Image from "next/image";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import {
  ComparisonItem,
  ComparisonProps,
  defaultComparisonData,
} from "./constants";

const Comparison = ({
  comparisonData = defaultComparisonData,
  badge = "Comparison",
  heading = "Choosing Us Over Others",
  description = "See why we stand out with superior service, innovation, and client satisfaction benchmarks.",
  centered = true,
  maxParticles = 200,
  section = "services",
  backgroundImage,
  leftLabel = "Other Agencies",
  rightLabel = "DevArtVentures",
  showLogo = true,
  tableId = "comparison-table",
  ariaLabel,
  showHeader = true,
  customStyles,
}: ComparisonProps) => {
  // Generate unique table ID for better SEO
  const uniqueTableId = `${tableId}-${Date.now()}`;

  // Generate descriptive aria-label for accessibility
  const tableAriaLabel =
    ariaLabel ||
    `Comparison table between ${leftLabel} and ${rightLabel} showing key differences and advantages`;

  return (
    <section
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
      aria-labelledby="comparison-heading"
    >
      <div className={classNames(styles.customContainer)}>
        <div>
          <SectionHeadingCard
            badge={badge}
            heading={heading}
            description={description}
            centered={centered}
            maxParticles={maxParticles}
            section={section}
            backgroundImage={backgroundImage || Images.ServiceSectionBg.src}
          />
        </div>

        <div className={classNames(styles.contentContainer)}>
          {/* Table Header */}
          {showHeader && (
            <div
              className={classNames(
                styles.header,
                "grid grid-cols-12 gap-4 relative"
              )}
              role="presentation"
            >
              <div className="col-span-6 flex items-center justify-center text-center">
                <h4 className="text-center break-words">{leftLabel}</h4>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <span className="flex items-center justify-center">
                  <Image
                    width={70}
                    height={70}
                    src={Images.Vs.src}
                    alt="Versus comparison"
                  />
                </span>
              </div>
              <div
                className={classNames(
                  styles.logoContainer,
                  "col-span-6 flex justify-center items-center gap-2 text-center"
                )}
              >
                {showLogo && (
                  <Image
                    width={31}
                    height={31}
                    src={Images.Logo.src}
                    alt="DevArtVentures logo"
                  />
                )}
                <h4 className="text-center break-words">{rightLabel}</h4>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          <div className={classNames(styles.tableContainer, "w-full")}>
            <table
              id={uniqueTableId}
              className={classNames(
                styles.comparisonTable,
                customStyles?.tableClass,
                "w-full"
              )}
              role="table"
              aria-label={tableAriaLabel}
              summary={`Comparison table showing differences between ${leftLabel} and ${rightLabel} services`}
            >
              <tbody>
                {comparisonData.map((item: ComparisonItem) => (
                  <tr
                    key={item.id}
                    className={classNames(
                      styles.tableRow,
                      customStyles?.rowClass,
                      "grid grid-cols-2"
                    )}
                    data-category={item.category}
                    data-feature={item.feature}
                  >
                    <td
                      className={classNames(
                        styles.otherAgencies,
                        customStyles?.cellClass,
                        "flex items-center gap-2"
                      )}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={Images.StarBullet.src}
                        alt="Standard feature indicator"
                        title={item.category || "Standard feature"}
                      />
                      <span className="font-medium">{item.otherAgencies}</span>
                    </td>
                    <td
                      className={classNames(
                        styles.devArtVentures,
                        customStyles?.cellClass,
                        "flex items-center gap-2"
                      )}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={Images.PowerBullet.src}
                        alt="Premium feature indicator"
                        title={item.feature || "Premium feature"}
                      />
                      <span className="font-medium">{item.devArtVentures}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
