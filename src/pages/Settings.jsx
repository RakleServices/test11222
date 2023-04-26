import {Navbar, Nav, NavDropdown,Container,Card, Button,Form,Table,Tab,Tabs} from 'react-bootstrap';
const Settings = () => {
  return <div className=""> 
 <>
  <Navbar bg="dark-light" variant="dark" className='w-100'>
    <Button variant="sm"><i class="fa fa-refresh"></i> Reload</Button>
    {/* <Button variant="sm"><i class="fa fa-trash-o"></i> Drop Tags</Button>
    <Button variant="sm"><i class="fa fa-trash-o"></i> Drop Alart</Button>
    <Button variant="sm"> format sd card</Button> */}
  </Navbar>
</>

<div className='row mainroz'>
    <div className='col-md-4 mldvl'>
      <div className="insetdx">
    <div className='row tophedfxdv'>
      <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
      <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
      </div>
        <Form className='row dtvfx'>
          <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
            <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
           
           
            <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
              <span className='todomx'>Todo</span>
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
              <span className='todomx'>&nbsp;</span>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
             
                   
                    <Form.Group className="col-md-12 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
           
            </Form>
         
            </div>
    </div>
    <div className='col-md-4'>
    <div className="insetdx">
    <div className='row tophedfxdv'>
      <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
      <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
      </div>
        <Form className='row dtvfx'>
          <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
          <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
           
           
      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
           
              <Form.Group className="col-md-6 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
                   
                    <Form.Group className="col-md-6 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
            </Form>
         
            </div>
    </div>
    <div className='col-md-4'><div className="insetdx">
    <div className='row tophedfxdv'>
      <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
      <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
      </div>
        <Form className='row dtvfx'>
          <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
          <Form.Group className="mb-3 col-md-8" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 col-md-3" controlId="formBasicPassword">
                <Form.Label>&nbsp;</Form.Label>
                <Button variant="primary">Primary</Button>
              </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
           
           
            <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
             
              <Form.Group className="col-md-4 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-4 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
                   
                    <Form.Group className="col-md-4 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
           
            </Form>
         
            </div></div>





            <div className='col-md-4 mldvl'>
      <div className="insetdx">
    <div className='row tophedfxdv'>
      <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
      <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
      </div>
        <Form className='row dtvfx'>
          <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
          <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
           
           
            <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
              <span className='todomx'>todo</span>
                <Form.Label>Password</Form.Label>
            <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
              <span className='todomx'>&nbsp;</span>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
             
                   
                    <Form.Group className="col-md-12 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
         
           
            </Form>
         
            </div>
 
    </div>
            <div className='col-md-4 mldvl'>
              <div className="insetdx">
            <div className='row tophedfxdv'>
              <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
              <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
              </div>
                <Form className='row dtvfx'>
                  <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
                    <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
                  
                  
                    <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                    <Form.Select>
                <option>Default select</option>
              </Form.Select>
              </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    
                      <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                  
                    </Form>
                
                    </div>
                    
            
    </div>
    <div className='col-md-4 mldvl'>
              <div className="insetdx">
            <div className='row tophedfxdv'>
              <div className='topdvfx col-md-6'><strong>Mode</strong> - Device Modes</div>
              <div className='topdvfx col-md-6 text-right'> <Button variant="sm"><i class="fa fa-upload"></i> Update</Button></div>
              </div>
                <Form className='row dtvfx'>
                  <p><i class='fa fa-exclamation-triangle'></i> If you are an IPSEN employee:</p>
                  <Tabs defaultActiveKey="first">
              <Tab eventKey="first" title="UART-1" >
              <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>UART-1</Form.Label>
                        <Form.Control type="password" placeholder="UART-1" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
              </Tab>
              <Tab eventKey="second" title="UART-2" >
              <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>UART-2</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
              </Tab>
              <Tab eventKey="third" title="UART-3" >
              <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>UART-3</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
              </Tab>
      </Tabs>           
    </Form>
                
   </div>
        
  </div>
    
 </div>



  


  </div>;
};

export default Settings;