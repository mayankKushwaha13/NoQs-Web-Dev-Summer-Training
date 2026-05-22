import { useEffect, useState } from "react";
import DataCard from "./components/DataCard";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();

      setData(result.slice(0, 12));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1>API Integration Task</h1>

      <button onClick={fetchPosts}>Refresh</button>

      {isLoading && <Spinner />}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && data.length === 0 && (
        <h2>No Data Found</h2>
      )}

      {!isLoading && !error && (
        <div className="grid">
          {data.map((post) => (
            <DataCard
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;