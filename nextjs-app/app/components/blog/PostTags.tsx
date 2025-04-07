interface PostTagsProps {
    tags: string[];
    language: 'en' | 'sw';
  }
  
  export const PostTags = ({ tags, language }: PostTagsProps) => (
    <div className="mb-12">
      <h3 className="font-serif font-semibold text-lg text-brand-dark mb-4">
        {language === 'en' ? 'Tags' : 'Vitambulisho'}
      </h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <a 
            key={tag} 
            href={`/tags/${tag.slice(1)}`}
            className="text-sm px-4 py-2 rounded-full bg-brand-foam/30 hover:bg-brand-foam/50 text-brand-medium transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );