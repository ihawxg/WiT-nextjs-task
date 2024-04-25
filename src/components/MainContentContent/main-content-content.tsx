import React, { Fragment } from "react";
import Image from "next/image";
import { Content } from "@/types/types";
import { RenderFormattedText } from "@/utils/render-formatted-text";


const content: Content = {
    h6Title: 'Welcomed humoured rejoiced peculiar to in an',
    listItems: [
        "She who <u>arrival</u> end how fertile enabled.",
        "Brother she add yet see <u>minuter</u> natural smiling article painted.",
        "<u>Themselves</u> at dispatched interested insensible."
    ],
    blockQuote: `
    "I'm not going to waste my time
    on a virtual debate, that's not
    what debating is all about,"
    `,
    images: {
        img1: {
            src: "/recent-news05.jpg",
            alt: "Image"
        },
        img2: {
            src: "/full-width06.jpg",
            alt: "Image",
            imgSource: "Photograph from <b>istockphoto.com</b>"
        },
        img3: {
            src: "/recent-news04.jpg",
            alt: "Image"
        }
    },
    video: {
        src: "/video.mp4",
        type: "video/mp4"
    },
    paragraphs: {
        p1: "The key to more success is to have a lot of pillows. Always remember in the jungle there’s a lot of they in there, after you will make it to <u>paradise</u>. Egg whites, turkey sausage, wheat toast, water.",
        p2: "U.C. President <strong>Tonald Crump</strong> is in a stable condition in his recovery from the disease caused by the coronavirus and he can safely return to public engagements on Saturday, his physician Sean Conley said.",
        p3: "Saturday will be day 10 since Thursday's diagnosis (<strong>of his infection</strong>), and based on the trajectory of advanced diagnostics the team has been conducting, I fully anticipate the president's safe return to public engagements at that time," +
            "Conley said in a <u>memorandum</u> released by the White House Thursday evening.",
        p4: "Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he. Could death since do we hoped is in. Exquisite no my attention extensive. The determine conveying moonlight age." +
            "Avoid for see marry sorry child. Sitting so totally forbade hundred to. Boy favourable day can introduced <strong>sentiments</strong> entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first." +
            "Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day <u>discretion</u> celebrated.",
        p5: "You disposal strongly quitting his endeavor two settling him. Manners ham him hearted hundred expense. Get open game him what hour more part. Adapted as smiling of females oh me journey exposed concern." +
            "Met come add cold calm rose mile what. Tiled <u>manor court</u> at built by place fanny. Discretion at be an so decisively especially. Exeter itself object matter if on mr in.",
        p6: "Woody equal ask saw sir weeks aware decay. Entrance <strong>prospect</strong> removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at." +
            "<u>Forbade</u> few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no. Boisterous estimating interested collecting get conviction <u>friendship</u> say boy. Him mrs shy article smiling respect opinion excited.",
        p7: "Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands." +
            "Received had end <strong>produced prepared</strong> diverted strictly off man branched. Known ye money so large decay voice there to. Preserved be mr cordially incommode as an." +
            "He doors quick child an point at. Had share vexed front least style off why him. Turned it up should no valley cousin he. Speaking numerous ask did horrible packages set." +
            "Ashamed herself has distant can studied mrs. Led therefore its middleton perpetual fulfilled provision frankness. Small he drawn after among every three no. All having but you edward genius though remark one.",
        p8: "Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. Up twenty <u>limits as months</u>. Inhabit so perhaps of in to certain." +
            "Sex excuse chatty was seemed warmth. Nay add far few immediate sweetness earnestly dejection."
    }
};

const MainContentContent: React.FC = () => {
    return (
        <>
            <p>{RenderFormattedText(content.paragraphs.p1)}</p>
            <p>{RenderFormattedText(content.paragraphs.p2)}</p>

            <figure className="half-left-image">
                <Image src={content.images.img1?.src} width={310} height={223} alt={content.images.img1?.alt} style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }} />
            </figure>

            <p>{RenderFormattedText(content.paragraphs.p3)}</p>
            <p>{RenderFormattedText(content.paragraphs.p4)}</p>

            <blockquote>
                {content.blockQuote}
            </blockquote>

            <p>{RenderFormattedText(content.paragraphs.p5)}</p>

            <figure className="image">
                <Image src={content.images.img2?.src} alt={content.images.img1?.alt} width={660} height={371} style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }} />
                {content.images.img2?.imgSource ? <figcaption>{RenderFormattedText(content.images.img2.imgSource)}</figcaption> : <figcaption>Photograph from <b>istockphoto.com</b></figcaption>}
            </figure>

            <p>{RenderFormattedText(content.paragraphs.p6)}</p>

            <h6><strong>{content.h6Title}</strong></h6>
            <ol>
                {content.listItems.map((listItem, index) => <li key={index}>{RenderFormattedText(listItem)}</li>)}
            </ol>

            <div className="video">
                <video width="660" height="495" controls autoPlay loop playsInline style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }}>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>

            <p>{RenderFormattedText(content.paragraphs.p7)}</p>

            <figure className="half-right-image">
                <Image src={content.images.img3?.src} width={310} height={223} alt={content.images.img1?.alt} style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }} />
            </figure>

            <p>{RenderFormattedText(content.paragraphs.p8)}</p>
        </>
    );
}

export default MainContentContent;
