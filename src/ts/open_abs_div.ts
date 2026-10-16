import gsap from "gsap";

export const open_ads_div = (target: HTMLElement) => {
  const parent_card_div = target.closest(".div_card_parent");
  if (parent_card_div) {
    const abs_div = parent_card_div.querySelector<HTMLDivElement>("#abs_div");
    if (abs_div) {
      gsap.set(abs_div, { display: "grid" });
      gsap.fromTo(
        abs_div,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, onComplete: () => {} },
      );
    }
  }
};
