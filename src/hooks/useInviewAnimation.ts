import { useInView } from "framer-motion";
import { useRef } from "react";

export function useInViewAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px", amount: threshold });

  return { ref, isInView };
}