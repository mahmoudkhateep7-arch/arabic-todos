import { confug_obj, type I_confug_obj } from "../main";
import { cbbb } from "./handle_submit_fn";
const t_string = "أهلاً بك في مهامك";
const desc_s = `مساحتك الدافئة لتنظيم يومك بكل راحة. نحن هنا لمساعدتك على ترتيب أفكارك، وإنجاز خططك، والاستمتاع بكل خطوة في`;
export const sync_with_local_storage = (grid_el: HTMLDivElement) => {
  const local_stroage_arr = localStorage.getItem("arr");
  if (local_stroage_arr == null) {
    // append a tarter card

    cbbb(t_string, desc_s, grid_el);
  } else {
    const a = localStorage.getItem("arr");
    if (a) {
      const parsed_arr: I_confug_obj[] = JSON.parse(a);
      if (parsed_arr.length == 0) {
        cbbb(t_string, desc_s, grid_el);
      } else {
        parsed_arr.forEach(({ day, desc, month, title, y, h, second }) => {
          cbbb(title, desc, grid_el, h, day, month, y, second);
          console.log("..........");
        });
      }
    }
  }
  localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
};
