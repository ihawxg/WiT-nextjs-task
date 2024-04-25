import { Author } from "@/types/types";
import Image from "next/image";
export default function MainContentAuthorInfoBox({ author }: {author:Author}) {
    return <div className="metas">
        <div className="author">
            <figure>
                <Image src={author.img} alt={author.imgAlt} width={70} height={70} style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }} />
            </figure>
            By <a href="#">{author.authorName}</a>
        </div>
        <div className="dot"></div>
        <span className="date">{author.postCreationDate}</span> <span className="comments">{author.postComments}</span>
    </div>
}