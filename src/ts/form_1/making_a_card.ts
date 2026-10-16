import type { I_confug_obj } from "../main";

export const making_a_card = ({
  day,
  desc,
  month,
  title,

  id,
  h,
}: I_confug_obj) => {
  const str_html_card = /*html */ `
  
  <div
  class="bg-card_bg div_card_parent min-h-50 justify-between relative  rounded-2xl flex flex-col max-w-[90%]  mx-auto w-full  sm:max-w-full   p-4 ">


<div id="abs_div" class="absolute left-4 bottom-4 z-130 hidden bg-black   gap-2 p-2 text-white text-2xl min-w-25">
      <span data-del_by_id="${id}" class="bg-[#474849] del_class_span p-2 cursor-pointer tracking-wide rounded-sm">حذف</span>
      <span data-edit_by_id="${id}" class="bg-[#474849] p-2 edit_class_span cursor-pointer tracking-wide rounded-sm">تعديل</span>
    </div>

  <div class="flex pb-3 flex-col gap-1 ">
  
    <h4 class="text-3xl font-bold capitalize">${title}</h4>
    <p class=" font-semibold text-xl text-[#727274] line-clamp-3">${desc}</p>
  </div>
  <div class="flex items-center pt-1 border-t border-[#545557] justify-between">
    <div id="timing_div">${h}-${day}-${month}</div>


      <span  class="iconify size-8 cursor-pointer ellipsis_cont " data-icon="lucide:ellipsis"></span>
      

  </div>


</div>
  `;
  return str_html_card;
};
