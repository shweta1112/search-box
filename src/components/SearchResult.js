import React from "react";
import "../styles.css";

const SearchResult = ({ searchData }) => {
  return (
    <div className="search-result-wrpper">
      {searchData.length !== 0 ? (
        searchData.map((data) => (
          <div className="search-result-box" key={data.id}>
            <div className="search-id">{data.id}</div>
            <div className="search-name">{data.name}</div>
            <div className="search-address">{data.address}</div>
          </div>
        ))
      ) : (
        <div className="no-user">No User Found</div>
      )}
    </div>
  );
};
export default SearchResult;
