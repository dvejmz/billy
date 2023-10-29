import React, {useEffect, useState } from 'react';

interface Bill {
  id: string;
  name: string;
  total: number;
}

function Bills() {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    const fetchBills = async () => {
      const res = await fetch('/helloworld');
      const bill = await res.json();
      setBills([bill]);
    }

    fetchBills();
  }, []);

  return (
    <div>
      <ul>
        {bills.map((b) => (<li>{b.name}</li>))}
      </ul>
    </div>
  );
}

export default Bills;
