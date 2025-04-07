interface CommentsSectionProps {
    language: 'en' | 'sw';
  }
  
 const CommentsSection = ({ language }: CommentsSectionProps) => (
    <div className="bg-brand-foam/30 p-6 rounded-xl">
      <h3 className="font-serif text-2xl font-bold text-brand-dark mb-6">
        {language === 'en' ? 'Join the conversation' : 'Jiunge na mazungumzo'}
      </h3>
      {/* Comment form and list */}

      <div className="mb-6">
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-brand-foam/50 bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue"
                rows={4}
                placeholder={language === 'en' ? 'Share your thoughts...' : 'Sema maoni yako...'}
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="px-6 py-2 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-lg font-medium">
                  {language === 'en' ? 'Post comment' : 'Tuma maoni'}
                </button>
              </div>
            </div>
            {/* Sample comment */}
            <div className="border-t border-brand-foam/50 pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold">
                    JM
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-brand-dark">John M.</h4>
                    <span className="text-xs text-brand-medium">2 days ago</span>
                  </div>
                  <p className="mt-1 text-brand-dark/90">
                    {language === 'en' 
                      ? "This is such an insightful piece. Karume's legacy continues to inspire generations." 
                      : "Makala yenye ufahamu sana. Urithi wa Karume unaendelea kuwaamsha vizazi."}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="text-sm text-brand-medium hover:text-brand-accent">
                      {language === 'en' ? 'Like' : 'Penda'}
                    </button>
                    <button className="text-sm text-brand-medium hover:text-brand-accent">
                      {language === 'en' ? 'Reply' : 'Jibu'}
                    </button>
                  </div>
                </div>
              </div>
              </div>
    </div>
  );


  export default CommentsSection;