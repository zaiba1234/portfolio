import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';
export default function NgProgressBar() {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollCompleation = () => {
            const currentProgress = window.scrollY
            // console.log(scrollProgress)
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight.toFixed(2)) * 100)

                )
            }
        }
        window.addEventListener("scroll", updateScrollCompleation)

    }, [])
    // console.log(completion)
    return (
        <>
            <Box style={{ transform: `translateX(${completion - 100}%)`, background: "#37B24D", height: "10px", position: "sticky", top: "0px", zIndex: 2 }}></Box>
        </>
    );
}
