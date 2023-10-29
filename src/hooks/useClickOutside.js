import { useEffect } from "react";

export default function useClickOutside(ref, close, listenCapturing = true) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [ref, close, listenCapturing]
  );
}
