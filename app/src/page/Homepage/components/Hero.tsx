import { useQuery } from "@tanstack/react-query"
import { getBlockQuery } from "../../../query/content/block.query"

export default function Hero() {

  const {data, isLoading} = useQuery({
    ...getBlockQuery("1"),
  });

  if (isLoading) {
    return <></>
  }

  console.log(data);

  return (
    <div className="w-full p-32 relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={(data?.data.fields.field_slideshow_images as Array<{url: string}>)[2]?.url}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-amber-950/75 z-5"></div>
      <div className="max-w-1/2 relative z-10">
        <span className="text-sm font-bold uppercase tracking-widest text-white">{data?.data.fields.field_slug as string}</span>
        <h1 className="text-9xl uppercase font-bold mb-5 text-white">{data?.data.fields.field_title as string}</h1>
        <p className="text-base font-normal mb-10 text-white">{data?.data.fields.field_description as string}</p>
        <button className="text-white rounded-2xl bg-gray-950 px-16 py-5">{data?.data.fields.field_cta_button_text as string}</button>
      </div>
    </div>
  )
}
