import { adding_ts } from "./adding_ts";
import { open_ads_div } from "./open_abs_div";
import { del_card_fn } from "./del_card_fn";
import gsap from "gsap";
export const obj_2_vs: {
  e_v: string;
  parent_div: null | HTMLDivElement;
  v: string;
  edit_mode: boolean;
  editing_idx: number;
  span_target: null | HTMLElement;
  shoud_scale_up: boolean;
} = {
  parent_div: null,
  v: "",
  e_v: "",
  edit_mode: false,
  editing_idx: -2,
  span_target: null,
  shoud_scale_up: true,
};
export const c_back_fn = (e: PointerEvent) => {
  const add_div = document.querySelector<HTMLDivElement>("#add_el")!;
  const target = e.target as HTMLElement;

  if (add_div.contains(target)) {
    adding_ts(e);

    // handle showing the form here
  }
  if (target.classList.contains("ellipsis_cont")) {
    open_ads_div(target);
  }
  if (target.classList.contains("del_class_span")) {
    del_card_fn(target);
  }
  if (target.classList.contains("edit_class_span")) {
    const div_p = target.closest("div") as HTMLDivElement;
    if (div_p) {
      gsap.set(div_p, { display: "none" });
    }
    const data_set_obj = target.dataset.edit_by_id as string;
    obj_2_vs.e_v = data_set_obj;
    console.log(data_set_obj);
    obj_2_vs.edit_mode = true;
    obj_2_vs.span_target = target;
    adding_ts(e);
  }
};
