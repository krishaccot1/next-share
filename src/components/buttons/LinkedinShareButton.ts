import transformObjectToParams from '../../utils';
import createShareButton from '../../hocs/createShareButton';

type Options = {
  title?: string;
  summary?: string;
  source?: string;
};

function linkedinLink(url: string, { title }: Options) {
  return (
    // 'https://linkedin.com/shareArticle' +
    // 'https://linkedin.com/sharing/share-offsite' +
    'https://www.linkedin.com/feed/' +
    transformObjectToParams({ 
      shareActive: 'true', 
      text : `${title} ${url}` 
    })
  );
}

const LinkedinShareButton = createShareButton<Options>(
  'linkedin',
  linkedinLink,
  ({ title }) => ({ title }),
  {
    windowWidth: 750,
    windowHeight: 600,
  },
);

export default LinkedinShareButton;
