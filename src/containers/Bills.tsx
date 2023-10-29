import React, { useEffect, useState } from 'react';

interface Bill {
  id: string;
  name: string;
  total: number;
}

function Bills() {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    const fetchBills = async () => {
      const res = await fetch('/api/bill/list');
      const bills = await res.json();
      setBills(bills.results);
    }

    fetchBills();
  }, []);

  return (
    <div>
      {bills.map((b: Bill) => (
        <div>
          <p>ID: {b.id}</p>
          <p>Name: {b.name}</p>
          <p>Total: £{b.total}</p>
        </div>
        ))}
    </div>
  );
}

export default Bills;
