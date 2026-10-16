import { confug_obj, type I_confug_obj } from "../main";
import { cbbb } from "./handle_submit_fn";

export const sync_with_local_storage = (grid_el: HTMLDivElement) => {
  const local_stroage_arr = localStorage.getItem("arr");
  if (local_stroage_arr == null) {
    // append a tarter card

    cbbb("tit 1", "my desc", grid_el);
    localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
  } else {
    const a = localStorage.getItem("arr");
    if (a) {
      const parsed_arr: I_confug_obj[] = JSON.parse(a);
      if (parsed_arr.length == 0) {
        cbbb("tit 1", "my desc", grid_el);
        localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
      } else {
        parsed_arr.forEach(({ day, desc, month, title, y, h, second }) => {
          cbbb(title, desc, grid_el, h, day, month, y, second);
          console.log("..........");
        });
        localStorage.setItem("arr", JSON.stringify(confug_obj.arr));
      }
    }
  }
};
