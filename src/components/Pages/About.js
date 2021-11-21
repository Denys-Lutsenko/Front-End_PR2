import React, { Component } from "react";

import CarouselBox from "../CarouselBox";
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
        <div>
             <CarouselBox />
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tourth">Fremeworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libaries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey="first">
                    <img src="https://softlist.com.ua/upload/medialibrary/a8b/Figma-vs-Photoshop.PNG" />
                    <p>Figma connects everyone in the design 
                        process so teams can deliver better products, faster.
                        It’s time to design on your terms
                        Figma is the only platform that brings together powerful 
                        design features you already love and 
                        a more efficient workflow to boot.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <img src="https://www.heiditoivonen.com/wp-content/uploads/2020/07/4-tips-voor-het-aansturen-van-een-team-1652-w768.jpg" />
                    <p>Figma connects everyone in the design 
                        process so teams can deliver better products, faster.
                        It’s time to design on your terms
                        Figma is the only platform that brings together powerful 
                        design features you already love and 
                        a more efficient workflow to boot.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <img src="https://cdn.dribbble.com/users/372375/screenshots/7895789/figma_web_templates_for_landing_page.png" />
                    <p>Figma connects everyone in the design 
                        process so teams can deliver better products, faster.
                        It’s time to design on your terms
                        Figma is the only platform that brings together powerful 
                        design features you already love and 
                        a more efficient workflow to boot.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                    <img src="https://cdn.dribbble.com/users/372375/screenshots/7895789/figma_web_templates_for_landing_page.png" />
                    <p>Figma connects everyone in the design 
                        process so teams can deliver better products, faster.
                        It’s time to design on your terms
                        Figma is the only platform that brings together powerful 
                        design features you already love and 
                        a more efficient workflow to boot.
                    </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      </div>
    );
  }
}

