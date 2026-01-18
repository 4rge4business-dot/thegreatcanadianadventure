// Updated category buttons with modified text color for non-selected state

const CategoryButtons = () => {
  return (
    <div className="flex space-x-2">
      <button className="bg-gray-200 text-black dark:text-white">Category 1</button>
      <button className="bg-gray-200 text-black dark:text-white">Category 2</button>
      <button className="bg-gray-200 text-black dark:text-white">Category 3</button>
    </div>
  );
};

export default CategoryButtons;