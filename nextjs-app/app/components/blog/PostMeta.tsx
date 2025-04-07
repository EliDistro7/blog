import { Calendar, Clock, Bookmark, Heart, Share2 } from 'lucide-react';

interface PostMetaProps {
  date: string;
  readTime: string;
  language: 'en' | 'sw';
  isBookmarked: boolean;
  isLiked: boolean;
  onBookmark: () => void;
  onLike: () => void;
}

 const PostMeta = ({
  date,
  readTime,
  language,
  isBookmarked,
  isLiked,
  onBookmark,
  onLike
}: PostMetaProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 text-brand-medium">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Calendar className="h-5 w-5" />
        <span>{date}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Clock className="h-5 w-5" />
        <span>{readTime}</span>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <button 
        onClick={onBookmark}
        className={`flex items-center space-x-2 ${isBookmarked ? 'text-brand-accent' : 'text-brand-medium hover:text-brand-accent'}`}
      >
        <Bookmark className="h-5 w-5" />
        <span className="text-sm">{language === 'en' ? 'Save' : 'Hifadhi'}</span>
      </button>
      <button 
        onClick={onLike}
        className={`flex items-center space-x-2 ${isLiked ? 'text-brand-coral' : 'text-brand-medium hover:text-brand-coral'}`}
      >
        <Heart className="h-5 w-5" />
        <span className="text-sm">{language === 'en' ? 'Like' : 'Penda'}</span>
      </button>
      <button className="flex items-center space-x-2 text-brand-medium hover:text-brand-blue">
        <Share2 className="h-5 w-5" />
        <span className="text-sm">{language === 'en' ? 'Share' : 'Sambaza'}</span>
      </button>
    </div>
  </div>
);


export default PostMeta;