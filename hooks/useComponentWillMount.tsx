import { useState, useEffect } from "react";

const useComponentWillMount = (callback: () => unknown) => {
  const [mounted, setMounted] = useState(false);

  if (!mounted) callback();

  useEffect(() => {
    setMounted(true);
  }, []);
};

export default useComponentWillMount;
