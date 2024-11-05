import Card from "@/components/card/Card";
import Styles from "./home.module.css";
import team from "@/data/team.json";
import TemplatePage from "@/components/templatePage/TemplatePage";
import { useTranslations } from "next-intl";

export default function Home() {
  const urlImgEvent = "/team/";
  const t = useTranslations();
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{t("home.title")}</h1>
      <p className={Styles.description}>{t("home.description")}</p>

      <div className={Styles.cardContainer}>
        {team?.map((item, index) => (
          <Card
            id={item.id}
            imgSrc={urlImgEvent + item.src}
            imgAlt={item.alt}
            title={item.title}
            description={item.description}
            buttonText="Plus de details"
            key={index}
            isProfile
          />
        ))}
      </div>
    </div>
  );
}
