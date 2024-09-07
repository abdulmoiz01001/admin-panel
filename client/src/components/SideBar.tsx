// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  const categories = [
    { name: "Woman's Fashion", hasSubMenu: true },
    { name: "Men's Fashion", hasSubMenu: true },
    { name: "Electronics", hasSubMenu: false },
    { name: "Home & Lifestyle", hasSubMenu: false },
    { name: "Medicine", hasSubMenu: false },
    { name: "Sports & Outdoor", hasSubMenu: false },
    { name: "Baby's & Toys", hasSubMenu: false },
    { name: "Groceries & Pets", hasSubMenu: false },
    { name: "Health & Beauty", hasSubMenu: false },
  ];

  return (
    <div className="w-64 p-4 bg-white border-r border-gray-200">
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center cursor-pointer hover:text-black text-gray-700"
          >
            <span>{category.name}</span>
            {category.hasSubMenu && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
