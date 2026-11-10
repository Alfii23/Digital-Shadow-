import React from 'react';

export const Statistics = () => {
  return (
    <section className="statistics-bar" aria-label="Key Statistics">
      {/* STATISTIC 1 */}
      <div className="stat-item">
        <div className="stat-number">6</div>
        <div className="stat-label">EXPOSURE CATEGORIES</div>
      </div>

      <div className="stat-divider" role="separator" aria-orientation="vertical"></div>

      {/* STATISTIC 2 */}
      <div className="stat-item">
        <div className="stat-number">15+</div>
        <div className="stat-label">DETECTION RULES</div>
      </div>

      <div className="stat-divider" role="separator" aria-orientation="vertical"></div>

      {/* STATISTIC 3 */}
      <div className="stat-item">
        <div className="stat-number">100%</div>
        <div className="stat-label">LOCAL ANALYSIS</div>
      </div>
    </section>
  );
};

