import React, {useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap
} from 'reactflow';
import Modal from 'react-bootstrap/Modal';
import 'reactflow/dist/style.css';
import Footbar from './footer';
import '../index.css';

let id = 1;
const getId = () => `${id++}`;

const reactFlowStyle = {
    background: 'white',
    width: '100%',
    height: '50%',
  };

const edgeOptions = {
    animated: true,
};
const initialNodes = [
];

const initialEdges = [
];

const fitViewOptions = {
    padding: 1,
  };
  

const assetsList = ["{\"assestname\":\"PC\",\"image\":\"./assets/pc.png\"}", "{\"assestname\":\"mic\",\"image\":\"./assets/mic.png\"}"];
const Develop = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);
  
  const addNodeElements = (image_src,assestname) =>{
    console.log("adding node to graph")
    const id = getId();
    const newNode = {
        id,
        position: { x: 100, y: 100 },
        data: { label: <div onClick={handleShow}><img style={{height: 20, width:20 }} src={image_src}/> {assestname+"_node_"+id} </div>},
      };

      setNodes((nds) => nds.concat(newNode));

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <><div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Asset Configuration</Modal.Title>
        </Modal.Header>
        <Modal.Body>all the fields</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
 <div>
  <div style={{"backgroundColor": "#a6b0bf"}} className="row">
    <div class="align-middle" style={{"width": "25%"}}><span>Assets</span></div>
    <div class="align-middle" style={{"width": "25%"}}>Graph Area</div>
  </div>
  <div className = "row">
  <div style={{"width": "25%", "borderStyle": "solid" , "borderColor": "#b9eeff"}}>
    <div className = "row" style={{"padding":"20px"}}>
    {assetsList.map((assestItem)=><>{
                <Card onClick={(event) => {addNodeElements(JSON.parse(assestItem).image,JSON.parse(assestItem).assestname)}} style={{"width": "80px","height":"80px", "margin":"5px"}}>
                <img style={{"width": "35px","height":"35px", padding:3}} src={JSON.parse(assestItem).image}></img>
                <text>{
                 JSON.parse(assestItem).assestname
                }
                </text>
                </Card> 
        }</>)} 
    </div>
  </div>
  <div class="col">    <div className="providerflow">
              <ReactFlowProvider>
                  <div className="reactflow-wrapper" style={{ height: 550 }}>
                      <ReactFlow style={reactFlowStyle}
                          nodes={nodes}
                          edges={edges}
                          onNodesChange={onNodesChange}
                          onEdgesChange={onEdgesChange}
                          defaultEdgeOptions={edgeOptions}
                          onConnect={onConnect}
                          fitView
                          fitViewOptions={fitViewOptions}
                          defaultZoom={-20}
                      >
                          <Controls />
                          <MiniMap />
                      </ReactFlow>
                  </div>
              </ReactFlowProvider>
          </div></div>


  </div>
  
</div>
<div style={{"padding":"10px"}} className = "row">
          <button class="btn btn-primary" style={{margin:10,"width":"10%"}} >Save</button>
          <button class="btn btn-primary" style={{margin:10,"width":"10%"}}>Publish</button>
            </div>
      </div>
      <Footbar/>
      </>

  );
};
 
export default Develop 