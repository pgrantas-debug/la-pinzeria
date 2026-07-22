// ============================================================
// ATIDARYTA/UŽDARYTA STATUSAS — realaus laiko tikrinimas
// ============================================================
import { siteConfig } from "../config/site.config";
import type { Lang } from "../i18n/translations";
import { useTranslations } from "../i18n/translations";

export function initStatus(lang: Lang) {
  const t = useTranslations(lang);

  function formatHour(hour: number) {
    return `${String(hour).padStart(2, "0")}:00`;
  }

  function getNextOpening(day: number, hour: number) {
    const schedule = siteConfig.hours.schedule as Record<number, { openHour: number; closeHour: number } | null>;

    const today = schedule[day];
    if (today && hour < today.openHour) {
      return today.openHour;
    }

    for (let offset = 1; offset <= 7; offset++) {
      const nextDay = (day + offset) % 7;
      const slot = schedule[nextDay];
      if (slot) return slot.openHour;
    }

    return null;
  }

  function update() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;
    const schedule = siteConfig.hours.schedule as Record<number, { openHour: number; closeHour: number } | null>;
    const today = schedule[day];
    const isOpen = !!today && hour >= today.openHour && hour < today.closeHour;

    const targets = [
      { pill: document.getElementById("statusPillNav"), text: document.getElementById("statusTextNav") },
      { pill: document.getElementById("statusPillHero"), text: document.getElementById("statusTextHero") },
    ];

    targets.forEach(({ pill, text }) => {
      if (!pill || !text) return;
      if (isOpen) {
        pill.classList.remove("closed");
        text.innerText = `${t.hero.openNow} ${formatHour(today!.closeHour)}`;
      } else {
        pill.classList.add("closed");
        const nextOpening = getNextOpening(day, hour);
        text.innerText = nextOpening === null ? t.hero.closedToday : `${t.hero.closedUntil} ${formatHour(nextOpening)}`;
      }
    });
  }

  update();
  setInterval(update, 60000);
}
