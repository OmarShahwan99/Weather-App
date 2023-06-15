
const Search = (props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="w-full sm:w-1/2 col-span-1 flex gap-4"
    >
      <input
        value={props.value}
        placeholder="Find Locations"
        type="text"
        onChange={props.onChange}
        className="bg-light-200 dark:bg-dark-200 border-none text-dark-100 dark:text-light-100 px-3 py-2 rounded-xl focus:outline-none w-2/3"
      />
      <button className="bg-light-200 inline dark:bg-dark-200 text-dark-100 dark:text-light-100 rounded-xl px-4 py-2 transition duration-300 dark:hover:bg-light-200 dark:hover:text-dark-200 hover:bg-dark-200 hover:text-light-200">
        Search
      </button>
    </form>
  );
};

export default Search;
