// components/menu/MenuThumbnail.jsx
import React from "react";
import Title from "../../Components/Title";
import { menuData } from "../../Constants/indexHome";

const MenuThumbnail = () => {
  // otomatis belah menjadi 2 kolom
  const midpoint = Math.ceil(menuData.length / 2);
  const leftItems = menuData.slice(0, midpoint);
  const rightItems = menuData.slice(midpoint);

  const renderItem = (item, index) => (
    <div key={index} className="py-5 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg tracking-wide">{item.name}</h3>

        <div className="flex items-center gap-2">
          {item.new && (
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-sm">
              New
            </span>
          )}
          <p className="font-semibold text-gray-800">{item.price}</p>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
    </div>
  );

  return (
    <section className="py-24 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <Title
        subtitle="What Happens Here"
        title="EXPLORE OUR MENU."
        align="center"
        animate={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-10">
        {/* LEFT LIST */}
        <div>{leftItems.map(renderItem)}</div>

        {/* RIGHT LIST */}
        <div>{rightItems.map(renderItem)}</div>
      </div>
    </section>
  );
};

export default MenuThumbnail;
