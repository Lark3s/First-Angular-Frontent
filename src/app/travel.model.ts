import { Comments } from "./comment.model";

export interface Travel {
    id: number;
    type: 'train' | 'plane' | 'bus';
    name: string;
    price: number;
    image?: string;
    date?: Date;
    description?: string;
    likes: number;
    img?: string;
    status?: 'done' | 'upcoming' | null;
    likeUsers?: number[];
    comments?: Comments[];
    reservedUsers?: number[];
    cancelledUsers?: number[];
    
}