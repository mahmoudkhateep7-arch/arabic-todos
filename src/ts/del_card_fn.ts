import gsap from "gsap";
import { obj_2_vs } from "./c_back_fn";
import { popu_cb } from "./grid_el";

export const del_card_fn = (target: HTMLElement) => {
  const card_parent = target.closest(".div_card_parent") as HTMLDivElement;
  const div_p = target.closest("div") as HTMLDivElement;
  if (div_p) {
    gsap.set(div_p, { display: "none" });
  }

  const data_set_v = target.dataset.del_by_id as string;
  obj_2_vs.parent_div = card_parent;
  obj_2_vs.v = data_set_v;

  const pop_up = document.querySelector<HTMLDivElement>("#pop_up");
  gsap.set(pop_up, { display: "flex" });
  gsap.fromTo(
    pop_up,
    { xPercent: 100, yPercent: -100 },
    {
      xPercent: 0,
      yPercent: 0,
      duration: 0.4,
      opacity: 1,
      onComplete: () => {
        // add
        if (pop_up) {
          if (pop_up.dataset.has_listenr == "true") {
            return;
          }
          pop_up.dataset.has_listenr = "true";
          pop_up.addEventListener("click", popu_cb);
        }
      },
    },
  );
};
