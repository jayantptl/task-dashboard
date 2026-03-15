function ViewToggle({ view, setView }) {
  return (
    <div className="view-toggle">
      <button onClick={() => setView("list")} className={view === "list" ? "active" : ""}>
        List
      </button>

      <button onClick={() => setView("card")} className={view === "card" ? "active" : ""}>
        Card
      </button>
    </div>
  );
}

export default ViewToggle;