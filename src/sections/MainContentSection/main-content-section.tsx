import MainContentAuthorInfoBox from "@/components/MainContentAuthorInfoBox/main-content-author-info-box";
import MainContentContent from "@/components/MainContentContent/main-content-content";
import Image from "next/image";

const author = {
    img: '/avatar01.jpg',
    imgAlt: 'image',
    authorName: 'Willimes Domson',
    postCreationDate: 'March 5th 2020',
    postComments: '12'
}

export default function MainContentSection({ title }: { title: string }) {
    return <>
        <div className="post-content">

            <h3 className="post-title">{title}</h3>

            <MainContentAuthorInfoBox author={author} />

            <MainContentContent/>
        </div>
    </>
}