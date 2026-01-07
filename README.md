# SSE in React — Practical Mastery Checklist

Goal: Master **Server-Sent Events (SSE)** in a **React application** using correct lifecycle management, user scoping, authentication, and cleanup.

Only production-relevant tasks. No demos.

---

## Tech Stack
- React
- JavaScript / TypeScript
- EventSource API

---

## Core Rule (Read First)

- SSE connection **MUST be created and closed inside React lifecycle**
- Never create EventSource outside `useEffect`
- Always clean up on unmount

If you violate this, your app will leak connections.

---

## LEVEL 1 — Single Global Stream

Purpose: Understand SSE behavior in React.

### Tasks
- [ ] Create SSE connection inside `useEffect`
- [ ] Store EventSource in `useRef`
- [ ] Handle `onmessage`
- [ ] Update React state from stream
- [ ] Verify multiple tabs receive same data

Outcome:  
You understand how SSE interacts with React rendering.

---

## LEVEL 2 — Lifecycle & Cleanup (Critical)

Purpose: Prevent duplicate streams.

### Tasks
- [ ] Close EventSource in cleanup function
- [ ] Ensure connection is created only once
- [ ] Confirm no duplicate connections on re-render
- [ ] Verify backend sees disconnect

Outcome:  
You won’t leak streams on re-renders or navigation.

---

## LEVEL 3 — Structured Data (Real Payloads)

Purpose: Handle real application data.

### Tasks
- [ ] Receive JSON payload
- [ ] Parse safely
- [ ] Update state immutably
- [ ] Handle malformed data

Outcome:  
You can stream real-time app state.

---

## LEVEL 4 — User-Scoped Streams (Most Important)

Purpose: Ensure data isolation.

### Tasks
- [ ] Pass userId when creating EventSource
- [ ] Scope UI updates to that user
- [ ] Open two users in different tabs
- [ ] Confirm no data leakage

Outcome:  
You can build notifications, feeds, dashboards.

---

## LEVEL 5 — Auth-Aware SSE

Purpose: Secure the connection.

### Tasks
- [ ] Use cookie-based auth (preferred)
- [ ] Handle 401 / auth failure
- [ ] Show auth error state in UI
- [ ] Reconnect after login/token refresh

Outcome:  
You understand SSE auth constraints in browsers.

---

## LEVEL 6 — Reconnect Control

Purpose: Avoid broken UX on network issues.

### Tasks
- [ ] Detect disconnect via `onerror`
- [ ] Prevent multiple EventSource instances
- [ ] Implement manual reconnect logic
- [ ] Display connection status

Outcome:  
Your SSE survives real networks.

---

## LEVEL 7 — Performance & Safety

Purpose: Production readiness.

### Tasks
- [ ] One SSE connection per user
- [ ] Close stream on logout
- [ ] Close stream on route change
- [ ] Avoid storing EventSource in state

Outcome:  
Your app won’t melt under load.

---

## Required Implementation Pattern

```ts
useEffect(() => {
  const es = new EventSource(url);
  eventSourceRef.current = es;

  es.onmessage = (e) => {
    setData(JSON.parse(e.data));
  };

  es.onerror = () => {
    es.close();
  };

  return () => {
    es.close();
  };
}, []);
