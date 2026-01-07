import { useEffect } from "react";

export default function useSSE() {
  useEffect(() => {
    const eventSource = new EventSource("/events");

    eventSource.onmessage = (event: MessageEvent) => {
      console.log(event, "event");
    };

    eventSource.onerror = (err: unknown) => {
      console.log(err, "err");
    };

    return () => {
      eventSource.close();
    };
  }, []);
}
