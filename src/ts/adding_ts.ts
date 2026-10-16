import { c_back_fn } from "./c_back_fn";
import { status_show } from "./grid_el";
import { gsap_fn_show_form } from "./gsap/gsap_show_fixed_form";

export const adding_ts = (e: PointerEvent) => {
  if (status_show.processing == true) {
    return;
  }
  status_show.processing = true;

  const grid_el = e.currentTarget as HTMLDivElement;
  grid_el.dataset.listenerAttached = "false";
  grid_el.removeEventListener("click", c_back_fn);

  const add_span_erapper =
    document.querySelector<HTMLDivElement>("#add_plus_wrapper")!;
  add_span_erapper.classList.remove("lg:group-hover:scale-120");

  gsap_fn_show_form(add_span_erapper, grid_el);
};
