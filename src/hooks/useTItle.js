import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - ToyWheelers`;
  }, [title])
};
export default useTitle;