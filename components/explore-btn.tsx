'use client';
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
    const handleClick = () => {
        console.log('Explore button clicked');
        posthog.capture('explore_button_clicked');
    };

    return (
        <button type="button" className="mt-7 mx-auto block" id="explore-btn" onClick={handleClick}>
            <a href="#events">
                Explore events
                <Image src="/icons/arrow-down.svg" alt="arrow down" width={24} height={24} className="inline-block ml-2 object-contain"/>
            </a>
        </button>
    )
}
export default ExploreBtn
