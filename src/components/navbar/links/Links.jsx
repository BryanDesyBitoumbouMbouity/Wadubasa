"use client";
import React, { Fragment, useState } from "react";
import Styles from "./links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const tab = [
  {
    titleEn: "Home",
    titleFr: "Accueil",
    path: "",
  },
  {
    titleEn: "Events",
    titleFr: "Evenements",
    path: "/events",
  },
  {
    titleEn: "Contact",
    titleFr: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const local = useLocale();

  const onClickHander = () => {
    setOpen(!open);
  };

  return (
    <>
      {/******div general */}
      <div>
        {/******div containe pour les liens descktop */}
        <div className={Styles.containerLinks}>
          {tab.map((item, index) => (
            <Link
              className={
                pathname === "/" + { local } + item.path
                  ? `${Styles.active}`
                  : ""
              }
              key={index}
              href={"/" + local + item.path}
            >
              {local === "en" ? item.titleEn : item.titleFr}
            </Link>
          ))}
        </div>

        {/******div containe pour les liens mobile */}
        <button
          style={{ backgroundColor: "fuchsia" }}
          onClick={onClickHander}
          className={Styles.menuMobile}
        >
          Menu mobile
        </button>
        {open && (
          <div className={Styles.containerMobileLinks}>
            {tab.map((item, index) => (
              <Link
                className={
                  pathname === "/" + { local } + item.path
                    ? `${Styles.active}`
                    : ""
                }
                key={index}
                href={"/" + local + item.path}
              >
                {local === "en" ? item.titleEn : item.titleFr}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
