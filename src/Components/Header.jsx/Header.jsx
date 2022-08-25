import React from "react";      
import { Log, Logo, Navbar, NavTag, Search, SearchWrapper, Top, TopWrapper , Container, Inp, Adv, Ser, Price, Stat, Right} from './Header.js'
import {NavLink} from 'react-router-dom'


const Header = () =>{
 
    return(
      <Top>
        <TopWrapper>
           <Container>
           <Navbar>

              <Logo>
                <h1>Houzing</h1>
              </Logo>

              <NavTag>
               <NavLink to="/"     style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
               <NavLink to="/"  style={{color: 'white', textDecoration: 'none'}}>Properties</NavLink>
               <NavLink to="/"  style={{color: 'white', textDecoration: 'none'}}>Contacts</NavLink>
              </NavTag>

              <Log>
                   <button>Login</button>
              </Log>

            </Navbar>
           </Container>
        </TopWrapper>

       <TopWrapper>
         <Container>
            <Search>
              <Inp>
                <input type="text" name="" id="" placeholder="Enter your address here..." />
              </Inp>
              <Stat>
                <button>Status</button>
              </Stat>
              <Price>
                <button>Price</button>
              </Price>
              <Adv>
                <button>Advanced</button>
              </Adv>
              <Ser>
                <button>Search</button>
              </Ser>

            </Search>
         </Container>
       </TopWrapper>
        
    
      </Top>
    )

}

export default Header