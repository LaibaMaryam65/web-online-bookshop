// src/components/FilterBar.jsx
import React from "react";

function FilterBar({ search, setSearch, category, setCategory, sort, setSort, categories, count, onRefresh }) {
  return (
    <div className="mb-4 p-3 border rounded shadow-sm">
      <div className="row g-2">
        <div className="col-12 col-md-3">
          <input 
            type="text" 
            placeholder="Search title or author" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-3">
          <select value={category} onChange={e => setCategory(e.target.value)} className="form-select">
            <option value="">All categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-12 col-md-3">
          <select value={sort} onChange={e => setSort(e.target.value)} className="form-select">
            <option value="">No sort</option>
            <option value="price-asc">Price Low → High</option>
            <option value="price-desc">Price High → Low</option>
            <option value="title-asc">Title A → Z</option>
            <option value="title-desc">Title Z → A</option>
          </select>
        </div>
        <div className="col-12 col-md-3 d-grid">
          <button className="btn btn-secondary" onClick={onRefresh}>Reset Filters</button>
        </div>
      </div>
      <div className="mt-2 small text-muted">{count} books shown</div>
    </div>
  );
}

export default FilterBar;