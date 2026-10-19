import React from "react";
import menu from "../../data/menu";

function MenuSectionContainer() {
  return (
    <section className="flex flex-col md:flex-row relative max-w-[1500px] mx-auto">
      <div className="h-[100vh] w-full md:sticky top-0 p-5 ">
        {/* Image container */}
        <div className="w-full h-full overflow-hidden rounded-xl relative">
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
          {/* Text */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-100 p-5 text-center">
            <h1 className="text-5xl font-semibold mb-2 great-vibes-regular text-[#D4AF37]">
              Our Menu
            </h1>
            <p className="text-lg font-semibold mb-5  text-[#D4AF37] italic max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laboriosam
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1623062553275-39028026d7be?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1609074071587-19e4e1e40943?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="h-fit w-full p-5 flex flex-col gap-10">
        {Object.keys(menu).map((item, key) => {
          return <MenuItemContainer item={item} key={key} />;
        })}
      </div>
    </section>
  );
}

const MenuItemContainer = ({ item }) => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-3xl font-semibold mb-5 great-vibes-regular text-[#D4AF37]">
        {item}
      </h1>
      <div className="flex justify-start items-start flex-col gap-5">
        {menu[item].map((item, key) => {
          return <MenuItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => {
  return (
    <div className="flex gap-5 justify-start items-start">
      <div className="w-[100px] h-[80px] overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={
            item.thumbnail ||
            "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold">{item.itemName}</h2>
        <p className="text-sm italic">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuSectionContainer;
