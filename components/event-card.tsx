'use client';
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";

interface EventCardProps {
    title: string;
    image: string;
    slug?: string;
    location?: string;
    date?: string;
    time?: string;
}
const EventCard = ({title, image, slug, location, date, time}: EventCardProps) => {
    return (
        <article id="event-card" className="relative">
            <Image src={image} alt={title} width={410} height={300} className="poster" />
            <div className="flex flex-row gap-2">
                <Image src="/icons/pin.svg" alt="pin icon" width={14} height={14} />
                <p>{location}</p>
            </div>
            <p className="title">{title}</p>
            <div className="datetime">
                <div>
                    <Image src="/icons/calendar.svg" alt="calendar icon" width={14} height={14} />
                    <p>{date}</p>
                </div>
                <div>
                    <Image src="/icons/clock.svg" alt="clock icon" width={14} height={14} />
                    <p>{time}</p>
                </div>
            </div>

            <Link
                href={`/events/${slug}`}
                className="absolute inset-0 text-[0px]"
                onClick={() => posthog.capture('event_card_clicked', { title, slug, location, date })}
            >Events</Link>
        </article>
    )
}
export default EventCard
