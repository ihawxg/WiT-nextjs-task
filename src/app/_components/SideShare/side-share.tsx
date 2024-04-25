import { SocialShare } from "@/app/_types/types";

const shares: SocialShare[] = [
    { platform: 'Facebook', count: 63, iconClass: 'fab fa-facebook-f' },
    { platform: 'Twitter', count: 378, iconClass: 'fab fa-twitter' },
    { platform: 'Pinterest', count: 40, iconClass: 'fab fa-pinterest-p' },
    { platform: 'LinkedIn', count: 97, iconClass: 'fab fa-linkedin-in' }
];

export default function SideShare() {
    return <>
       <div className="side-share">
            <ul>
                {shares.map((share, index) => (
                    <li key={index}>
                        <a href="#"><i className={share.iconClass}></i></a> <b>{share.count}</b>
                    </li>
                ))}
            </ul>
            <div className="total">
                {shares.reduce((total, share) => total + share.count, 0)} <small>SHARES</small>
            </div>
        </div>
    </>
}