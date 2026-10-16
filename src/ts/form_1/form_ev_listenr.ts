import gsap from "gsap";
import { handle_submit_fn } from "./handle_submit_fn";
import { c_back_fn } from "../c_back_fn";
export const move_left = { procesing: false };
export const form_ev_listner_fn = (
  grid_el: HTMLDivElement,
  fixed_form_1: HTMLDivElement,
) => {
  if (fixed_form_1.dataset.listenerAttached == "true") {
    return;
  }
  fixed_form_1.dataset.listenerAttached = "true";

  fixed_form_1.addEventListener("click", (e: PointerEvent) => {
    // e.stopPropagation();
    const target = e.target as HTMLElement;
    const current_target = e.currentTarget as HTMLElement;
    const x_del = document.querySelector<HTMLDivElement>("#del_x")!;
    if (x_del.contains(target) || current_target == target) {
      move_to_left(fixed_form_1, grid_el);
    }
    handle_submit_fn();
    // we could add the submit handle overhere
  });
};
export const move_to_left = (
  fixed_form_1: HTMLDivElement,
  grid_el: HTMLDivElement,
  c_b?: () => void,
) => {
  if (move_left.procesing == true) {
    return;
  }
  move_left.procesing = true;

  // hide the fixed_el
  gsap.fromTo(
    fixed_form_1,
    { opacity: 1 },
    {
      opacity: 0,
      xPercent: -100,
      duration: 0.4,
      onComplete: () => {
        gsap.set(fixed_form_1, { display: "none" });
        move_left.procesing = false;
        if (grid_el.dataset.listenerAttached == "true") {
          return;
        }

        grid_el.dataset.listenerAttached = "true";
        grid_el.addEventListener("click", c_back_fn);
        if (c_b) {
          c_b();
        }
      },
    },
  );
};
