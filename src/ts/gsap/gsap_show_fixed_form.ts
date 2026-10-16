import gsap from "gsap";
import { status_show } from "../grid_el";
import { form_ev_listner_fn } from "../form_1/form_ev_listenr";
import { obj_2_vs } from "../c_back_fn";
import { confug_obj } from "../main";

export const gsap_fn_show_form = (
  add_span_erapper: HTMLDivElement,
  grid_el: HTMLDivElement,
) => {
  const fixed_form_1 = document.querySelector<HTMLDivElement>("#fixed_form_1");
  if (fixed_form_1 == null) {
    return;
  }
  // in edit mode edit th innerhtml
  gsap.set(fixed_form_1, {
    display: "flex",
    onComplete: () => {
      form_ev_listner_fn(grid_el, fixed_form_1);
      if (obj_2_vs.edit_mode) {
        const form_h4 = document.querySelector<HTMLHeadElement>("#form_h4")!;
        form_h4.textContent = `
تعديل هذه الملاحظة
`;
        const form_sub_btn =
          document.querySelector<HTMLButtonElement>("form button")!;
        form_sub_btn.textContent = `تعديل`;
        const title_input =
          document.querySelector<HTMLInputElement>("input#title")!;
        const desc_teaxarea = document.querySelector("textarea")!;
        const id = Number(obj_2_vs.e_v);
        const index = confug_obj.arr.findIndex((obj) => {
          return id == obj.id;
        });
        if (index >= 0) {
          title_input.value = confug_obj.arr[index].title;
          desc_teaxarea.value = confug_obj.arr[index].desc;
          obj_2_vs.editing_idx = index;
        }
      } else {
        const form_h4 = document.querySelector<HTMLHeadElement>("#form_h4")!;
        form_h4.textContent = `
أضف ملاحظة جديدة هنا
`;
        const form_sub_btn =
          document.querySelector<HTMLButtonElement>("form button")!;
        form_sub_btn.textContent = `إضافة`;
      }
    },
  });

  gsap.fromTo(
    fixed_form_1,
    {
      opacity: 0,
      yPercent: 100,
      xPercent: 100,
    },
    {
      opacity: 1,
      height: "100vh",
      yPercent: 0,
      xPercent: 0,
      duration: 0.4,
      onComplete: () => {
        status_show.fixed_form_shown = true;
        status_show.processing = false;

        add_span_erapper.classList.add("lg:group-hover:scale-120");
      },
    },
  );
};
