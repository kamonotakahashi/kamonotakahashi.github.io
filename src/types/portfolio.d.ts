import { Image } from '@/types/Image';
export interface ProfilePortfolio {
    id?: number,
    siteName?: string,
    path?: string,
    image?: Image,
    createdDate?: Date,
    publish?: Boolean,
    goodCount?: number,
    badCount?: number,
}