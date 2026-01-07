import { useEffect } from "react";

export default function useSSE() {
  useEffect(() => {
    const eventSource = new EventSource("/events");

    eventSource.onmessage = (event: MessageEvent) => {};

    eventSource.onerror = (err: unknown) => {};

    return () => {
      eventSource.close();
    };
  }, []);
}
