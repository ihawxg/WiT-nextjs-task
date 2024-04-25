import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ["/","aqum","/post-single"],
            disallow: []
        },
        sitemap: "http://www.themezinho.net/aqum/sitemap.xml"
    }
}