import Carousel from "@/components/Carousel/carousel"
import { Slide } from "@/types/types";

const slides: Slide[] = [
    { id: 0, imageUrl: '/test20.jpg', href: '/post-single' },
    { id: 1, imageUrl: '/test21.jpg', href: '/post-single' },
    { id: 2, imageUrl: '/test22.jpg', href: '/post-single' }
];

export default function Slider() {
    return <Carousel slides={slides}/>
}