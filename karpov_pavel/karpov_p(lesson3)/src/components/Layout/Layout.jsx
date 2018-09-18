import 'normalize.css';
import './Layout.css';

import React, { Component, Fragment } from 'react';
import Header from 'components/Layout/Header';
import SideBar from 'components/Layout/SideBar'
import Main from 'components/Layout/Main';

const itemsList = ['item1', 'item2', 'item3'];

export default class Layout extends Component {
   render () {
       return (
            <Fragment>
             <Header />
                    <SideBar itemsList = {itemsList}/>   
                    <Main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci, facere in cupiditate eos 
                        temporibus excepturi fugit porro fugiat magnam voluptate deserunt quasi officia fuga, necessitatibus, 
                        totam at quam. Atque perspiciatis ut consequatur rerum neque asperiores, maxime obcaecati explicabo 
                        blanditiis recusandae ad a repudiandae sapiente incidunt fuga ipsam dolore voluptates.
                    </Main> 
           </Fragment>
       )
   }

}