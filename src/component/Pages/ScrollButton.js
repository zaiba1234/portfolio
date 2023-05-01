import {  Group } from '@mantine/core';
import { RiArrowUpSLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <Group position="center">

            {showButton && (
                    <RiArrowUpSLine onClick={handleScrollTop} style={{ background: "#37B24D", height: "40px", width: "40px", borderRadius: "50%", position: "fixed", bottom: "100px", color: "white", right: "5%" }}/>
            )}
        </Group>
    );
}
