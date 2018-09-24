import './MainPage.css'

import React, { PureComponent, Fragment } from 'react';

import Sidebar from 'components/Sidebar';
import Home from 'components/Home';

export default class MainPage extends PureComponent {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        main: {
            heading: 'Page Heading',
            secondary: 'Secondary Text',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto blanditiis consequatur cum eos error harum inventore ipsam itaque laboriosam laborum minima molestiae molestias nemo officiis omnis provident qui, saepe suscipit tenetur, veniam voluptas? Atque optio placeat quis recusandae similique soluta tempora? Adipisci, aliquam amet atque aut autem consequuntur corporis cumque cupiditate dolor dolores eos explicabo facere fugit incidunt modi molestias natus non perferendis possimus quia quibusdam quisquam repudiandae, ullam voluptates voluptatum. Aperiam assumenda atque aut deserunt esse ipsum nam officiis quam! Accusantium aperiam, aspernatur atque corporis, eum ex harum labore, nostrum nulla numquam omnis provident quod ratione vel veniam voluptatem voluptatibus. A ad corporis dolores error ex excepturi expedita hic, illo minima, nisi, officia repellendus repudiandae sit. Beatae itaque laudantium magni, natus optio recusandae sed. Architecto atque beatae culpa distinctio dolore dolores ea eligendi ex illo ipsum, labore, laudantium magni molestiae necessitatibus nulla officia perferendis possimus provident quas qui quia quod repellat sequi ut voluptates. Aperiam asperiores dignissimos doloribus eius inventore quibusdam quis quod, sapiente sed unde. Ad aliquam fuga fugiat hic incidunt minima modi nesciunt odio perspiciatis quam qui repellat rerum sint, sunt voluptatem. Accusantium at atque, commodi debitis eos exercitationem ipsa ipsum itaque laborum molestias non, odit quidem reiciendis rem reprehenderit sunt tempora totam voluptas. Ad aliquid asperiores debitis dicta ex molestias, natus numquam officiis quae quia quis reprehenderit sed sint temporibus, voluptate. Ad alias aliquam debitis deleniti deserunt, distinctio doloremque earum eius eos excepturi, exercitationem fugit hic, nobis nostrum similique. Cumque deleniti deserunt inventore iure nam nesciunt, numquam, officiis provident quasi qui quidem quod quos recusandae sapiente sint, suscipit velit vitae voluptatum. Aperiam architecto cumque dolorem, magni obcaecati officia officiis quis sed. A accusamus aliquid deleniti dolore explicabo fuga, in, ipsum labore laudantium molestiae mollitia officia, porro quidem quis quo sit tempore tenetur voluptate.',
    
        },
        categories: [
            {
                href: '#',
                title: 'Front',
            },
            {
                href: '#',
                title: 'Back',
            },
            {
                href: '#',
                title: 'Humor',
            },
        ],
        side: {
            title: 'Side',
            content: 'Side content',
        },
    }

    render() {
        const { main, categories, side } = this.props;
        return <div>
            <div className='container'>

                <div className='row'>
                    {/*<!-- Blog Entries Column -->*/}
                    <Home heading={main.heading} secondary={main.secondary} content={main.content} />
                    {/*<!-- Sidebar Widgets Column -->*/}
                    <Sidebar categories={categories} side={side} />
                </div>

            </div>)           
        </div>
    }
}

