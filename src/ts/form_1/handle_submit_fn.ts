import gsap from "gsap";
import { move_to_left } from "./form_ev_listenr";
import { making_a_card } from "./making_a_card";
import { confug_obj, type I_confug_obj } from "../main";
import { obj_2_vs } from "../c_back_fn";

export const handle_submit_fn = () => {
  //
  const form_1_el = document.querySelector("form")!;
  const has_lisners = form_1_el.dataset.has_event_attached;
  if (has_lisners == "true") {
    return;
  }
  form_1_el.dataset.has_event_attached = "true";
  //
  form_1_el.addEventListener("submit", (e) => {
    e.preventDefault();
    const form_data = new FormData(form_1_el);
    const title_v = form_data.get("title");
    const desc_v = form_data.get("desc");
    if (title_v == null || desc_v == null) {
      return;
    }
    const f_title = title_v.toString();
    const f_desc = desc_v.toString();
    if (f_desc.trim().length < 3 || f_title.trim().length < 3) {
      return;
    }
    const fixed_form_1 =
      document.querySelector<HTMLDivElement>("#fixed_form_1")!;
    const grid_el = document.querySelector<HTMLDivElement>("#grid_el")!;

    // clear
    form_1_el.reset();

    move_to_left(fixed_form_1, grid_el, () => {
      if (obj_2_vs.edit_mode == true && obj_2_vs.span_target) {
        //

        const parent_dvv = obj_2_vs.span_target.closest(".div_card_parent");
        const desc_p = parent_dvv?.querySelector<HTMLParagraphElement>("p");
        const title_h4 = parent_dvv?.querySelector<HTMLHeadElement>("h4");
        const timing_div =
          parent_dvv?.querySelector<HTMLDivElement>("#timing_div");

        if (desc_p && title_h4 && timing_div) {
          title_h4.textContent = f_title;
          desc_p.textContent = f_desc;
          const now_t = new Date();
          const y = now_t.getFullYear();
          const month = now_t.getMonth() + 1;
          const day = now_t.getDate();
          const second = now_t.getSeconds();
          const hour = now_t.getHours() + 1;
          confug_obj.arr[obj_2_vs.editing_idx].title = f_title;
          confug_obj.arr[obj_2_vs.editing_idx].desc = f_desc;
          confug_obj.arr[obj_2_vs.editing_idx].y = String(y);
          confug_obj.arr[obj_2_vs.editing_idx].month = String(month);
          confug_obj.arr[obj_2_vs.editing_idx].day = String(day);
          confug_obj.arr[obj_2_vs.editing_idx].second = String(second);
          confug_obj.arr[obj_2_vs.editing_idx].h = String(hour);
          console.log(confug_obj.arr[obj_2_vs.editing_idx]);
          timing_div.textContent = `${second}-${hour}-${y}-${month} -:- ${day}`;
        }

        gsap.fromTo(
          parent_dvv,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, duration: 0.8, scale: 1 },
        );
        obj_2_vs.edit_mode = false;
        obj_2_vs.e_v = "";
        obj_2_vs.editing_idx = -1;
      } else {
        cbbb(f_title, f_desc, grid_el);
      }
      localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
    });
  });
};
export const cbbb = (
  title: string,
  desc: string,
  grid_el: HTMLDivElement,
  h?: string,

  c_day?: string,
  c_month?: string,
  c_year?: string,
  s?: string,
) => {
  const now_t = new Date();
  const y = c_year || now_t.getFullYear();
  const month = c_month || now_t.getMonth() + 1;
  const day = c_day || now_t.getDate();
  const second = s || now_t.getSeconds();
  const hour = h || now_t.getHours() + 1;
  console.log(hour);

  const obj: I_confug_obj = {
    id: Math.random(),
    day: String(day),
    desc,
    month: String(month),
    title,
    y: String(y),
    second: String(second),
    h: String(hour),
  };
  confug_obj.arr.push(obj);

  const res = making_a_card(confug_obj.arr[confug_obj.arr.length - 1]);
  grid_el.insertAdjacentHTML("beforeend", res);

  const last_el = grid_el.lastElementChild;
  gsap.fromTo(
    last_el,
    { opacity: 0, xPercent: -100 },
    { opacity: 1, duration: 0.4, xPercent: 0 },
  );
};
