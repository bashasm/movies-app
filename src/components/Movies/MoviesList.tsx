function MoviesList({ page, results, total_pages, total_results }) {
  console.log("[MoviesList]", page, results, total_pages, total_results);

  return (
    <div>
      <button>Previous</button>
      {page}
      <button>Next</button>
    </div>
  );
}

export default MoviesList;
