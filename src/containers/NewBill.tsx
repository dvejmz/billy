import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function NewBill() {
  const [billName, setBillName] = useState<string>('');
  const [billTotal, setBillTotal] = useState<number>();
  const [submissionMessage, setSubmissionMessage] = useState<string>('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onSubmit={async (ev) => {
          ev.preventDefault();
          console.log("Form submission details:", billName, billTotal);
          const res = await fetch('/api/bill/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: billName, total: billTotal }),
          });

          if (res.status !== 200) {
            setSubmissionMessage('Failed to create bill 😿');
          } else {
            setSubmissionMessage('Bill created successfully.');
          }
      }}>
      <div>
        <label htmlFor="billName">Bill Name:</label>
        <input name="billName" type="text" onChange={(ev) => { setBillName(ev.target.value); }} />
      </div>
        <div>

        <label htmlFor="billTotal">Bill Total:</label>
        <input name="billTotal" type="text" onChange={(ev) => { setBillTotal(Number.parseFloat(ev.target.value)); }} />
        </div>
        <Button type="submit" size="lg">Create</Button>
      </form>
      <p>{submissionMessage}</p>
    </div>
  );
}

export default NewBill;
