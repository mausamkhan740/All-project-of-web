// lottary.js
export function genTicket(length = 3) {
    const ticket = [];
    for (let i = 0; i < length; i++) {
      ticket.push(Math.floor(Math.random() * 10)); // random digit 0–9
    }
    return ticket;
  }
  
  export function sum(ticket) {
    return ticket.reduce((acc, curr) => acc + curr, 0);
  }
  