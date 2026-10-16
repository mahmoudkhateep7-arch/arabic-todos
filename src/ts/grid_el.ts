import gsap from "gsap";
import { sync_with_local_storage } from "./form_1/sync_with_local_storage";
import { confug_obj } from "./main";
import { c_back_fn, obj_2_vs } from "./c_back_fn";

export const status_show = { processing: false, fixed_form_shown: false };

export const fn_even_l_grid_el = () => {
  const grid_el = document.querySelector<HTMLDivElement>("#grid_el");
  if (grid_el == null) {
    return;
  }
  sync_with_local_storage(grid_el);

  const has_lisners = grid_el.dataset.listenerAttached == "true";
  if (has_lisners == true) {
    return;
  }
  grid_el.dataset.listenerAttached = "true";
  grid_el.addEventListener("click", c_back_fn);
};

export const popu_cb = (e: PointerEvent) => {
  const pop_up = document.querySelector<HTMLDivElement>("#pop_up")!;

  const taeget = e.target as HTMLElement;
  const x_canceel = document.querySelector<HTMLSpanElement>("#popup_cancel")!;

  const c_target = e.currentTarget;
  if (taeget == c_target || taeget == x_canceel) {
    gsap.to(pop_up, {
      opacity: 0,
      onComplete: () => {
        pop_up.dataset.has_listenr = "false";
        pop_up.removeEventListener("click", popu_cb);
        gsap.set(pop_up, { display: "none" });
      },
    });
  }
  const del_span_popup =
    document.querySelector<HTMLSpanElement>("#del_span_popup")!;

  if (taeget == del_span_popup) {
    //
    // const del_id=

    const index = confug_obj.arr.findIndex((c) => {
      return Number(obj_2_vs.v) == c.id;
    });

    const card_parent = obj_2_vs.parent_div;
    if (index >= 0) {
      confug_obj.arr.splice(index, 1);
      pop_up.dataset.has_listenr = "false";

      pop_up.removeEventListener("click", popu_cb);

      localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
      // remove the popup'
      gsap.to(pop_up, {
        opacity: 0,
        onComplete: () => {
          gsap.set(pop_up, {
            display: "none",
            onComplete: () => {
              gsap.to(card_parent, {
                duration: 0.2,
                onComplete: () => {
                  gsap.to(card_parent, {
                    opacity: 0.4,
                    onComplete: () => {
                      gsap.to(card_parent, {
                        scaleX: 30,
                        opacity: 0.2,
                        onComplete: () => {
                          if (card_parent) {
                            card_parent.remove();
                          }
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
      //
    }
  }
};
