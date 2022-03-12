import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getPaintingsService } from "../services/ApiServices";

const SearchPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getPaintingsService(searchParams.get("searchQuery") as String,
      searchParams.get("uploaderUsername") as String,
      searchParams.get("artist") as String,
      searchParams.get("name") as String,
      searchParams.get("sortField") as String,
      searchParams.get("sortOrder") as String,
      parseInt(searchParams.get("pageNumber") as string, 10),
      parseInt(searchParams.get("rpp") as string, 10)
    )
  })

  return <p>This is Search page!</p>;
}

export default SearchPage;