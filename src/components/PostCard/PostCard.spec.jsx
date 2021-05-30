const { render, screen } = require('@testing-library/react');
import { PostCard } from './index';

const props = {
    title: 'title 1',
    body: 'body 1', 
    cover: 'img/img.png'
};

describe('<PostCard />', () => {
    it('sholud render PostCard correctly', () => {
        render(<PostCard {...props} />);
        
        expect(screen.getByRole('img', {name: /title 1/i})).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'img/img.png');
        expect(screen.getByRole('heading', {name: 'title 1'})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
        expect(screen.getByAltText(/title 1/i)).toBeInTheDocument();
    });

    it('sholud match snapshot', () => {
        const {container} =  render(<PostCard {...props} />);
        
        expect(container.firstChild).toMatchSnapshot();
    });
});