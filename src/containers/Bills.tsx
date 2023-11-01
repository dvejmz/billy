import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

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
        <Card>
          <Card.Title>
            {b.name}
          </Card.Title>
          <Card.Body>
            <p>ID: {b.id}</p>
            <p>Total: £{b.total}</p>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
}

export default Bills;
