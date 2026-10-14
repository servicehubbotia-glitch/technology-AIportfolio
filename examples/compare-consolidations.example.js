/**
 * Portfolio demonstration only.
 *
 * This file illustrates how stored consolidation dates can be compared with
 * dates supplied by another program. It does NOT connect to EUR-Lex, track
 * current legislation, send alerts, or publish the original private watcher.
 *
 * A real monitoring system also needs trustworthy retrieval, source checks,
 * scheduling, persistence, error handling and human review.
 */
function compareConsolidationDates(record, observedDate) {
  if (!record || !/^\d{4}-\d{2}-\d{2}$/.test(record.known_consolidation)) {
    throw new Error('A validated known consolidation date is required.');
  }
  if (typeof observedDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(observedDate)) {
    return { celex: record.celex, status: 'needs-verification' };
  }
  return {
    celex: record.celex,
    status: observedDate > record.known_consolidation
      ? 'review-possible-update'
      : 'no-newer-date-in-sample',
    known: record.known_consolidation,
    observed: observedDate
  };
}

// Hypothetical input to demonstrate the comparison; NOT an EUR-Lex result.
const sampleRecord = {
  celex: '02008R1333',
  known_consolidation: '2026-02-18'
};
const example = compareConsolidationDates(sampleRecord, '2026-10-01');
if (typeof module !== 'undefined') module.exports = {
  compareConsolidationDates, sampleRecord, example
};
