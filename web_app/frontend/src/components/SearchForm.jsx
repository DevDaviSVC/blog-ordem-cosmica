import { IoSearchSharp } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form className="hero text-center flex gap-8 flex-col items-center mb-[4rem]">
      <div className="flex gap-4 flex-col items-center">
        <h1 className="text-6xl font-semibold">Want to see what's new?</h1>
        <h4 className="text-xl textColorAltTwo">
          Find anything about everything.
        </h4>
      </div>

      <div className="search-term-input-wrapper max-w-[800px] w-[90%] relative">
        <input
          type="text"
          name="search"
          placeholder="Astronomics..."
          className="bg-white rounded-3xl w-full p-3 text-black"
        />
        <button
          type="submit"
          className="absolute right-[2%] top-[50%] translate-y-[-50%] text-black text-xl cursor-pointer"
        >
          <IoSearchSharp />
        </button>
      </div>
    </form>
  );
}
export default SearchForm;