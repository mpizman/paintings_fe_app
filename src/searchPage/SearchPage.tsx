import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchResultBox from "../searchResultBox/SearchResultBox";
import { getPaintingsService } from "../services/ApiServices";
import { searchPaintingsResponse } from "../type";
import styles from './SearchPage.module.scss';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResponse, setsearchResponse] = useState<searchPaintingsResponse>({} as searchPaintingsResponse)

  useEffect(() => {
    getPaintingsService(searchParams.get("searchQuery") as String,
      searchParams.get("uploaderUsername") as String,
      searchParams.get("artist") as String,
      searchParams.get("name") as String,
      searchParams.get("sortField") as String,
      searchParams.get("sortOrder") as String,
      parseInt(searchParams.get("pageNumber") as string, 10),
      parseInt(searchParams.get("rpp") as string, 10)
    ).then(result => {
      setsearchResponse(result);
    });
  }, [searchParams])

  return <div className={`${styles.searchPage} container`}>
    {searchParams.get("searchQuery")?.length ?
      <h1 className="searchPageTitle">
        Results for "{searchParams.get("searchQuery")}":
      </h1>
      : <h1 className="searchPageTitle">Recent paintings:</h1>}
    <ul className="searchResultsList">
      {searchResponse?.content?.map(searchResult =>
        <SearchResultBox key={searchResult.id} painting={searchResult} />
      )}
    </ul>
  </div>
}

export default SearchPage;