//This custom hook helps me know when my customs internet is on and when it's off

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)
    //check if online

    useEffect( () => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })


    }, [])
    // return boolean value true/false
    return onlineStatus;
}

export default useOnlineStatus;