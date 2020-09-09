import React, { Component } from 'react';
import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon 
} from './styles'

class index extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <div className="left">
            <LinkedInIcon/>
            <SearchInput placeholder="Pesquisar"/>
          </div>

          <div className="right">
            <nav>
              <button className="active">
                <HomeIcon/>
                <span>Início</span>
              </button>
              <button>
                <NotificationsIcon/>
                <span>Notificações</span>
              </button>
              <button>
                <ProfileCircle src="http://github.com/hducati.png"/>
                <span>
                  Eu <CaretDownIcon/>
                </span>
              </button>
            </nav>
          </div>
        </Wrapper>
      </Container>
    );
  }
}

export default index;