function SearchFilter({ search, setSearch, setStatusFilter, setPriorityFilter }) {
  return (
    <div className="search-filter">
      <input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="all">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default SearchFilter;