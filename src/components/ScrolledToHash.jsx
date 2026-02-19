import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToHash() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (!hash) {
      // Optional: scroll to top on route change
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    // Wait for the page to render the target section
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
    });
  }, [pathname, hash]);

  return null;
}
