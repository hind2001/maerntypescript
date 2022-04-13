import React,{Component} from "react";
import { Button, Container,ListGroup,ListGroupItem } from "reactstrap";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from "uuid";

class ShoppingList extends Component<{},any>{
    state={
        items:[
            {id:uuid(),name:'Eggs'},
            {id:uuid(),name:'Milk'},
            {id:uuid(),name:'Steak'},
            {id:uuid(),name:'Water'}
        ]
    }

    render(){
        const {items}=this.state;
        return(
            <Container>
                <Button color="dark" style={{marginBottom:'2rm'}}
                onClick={()=>{
                    const name=prompt('Enter Item');
                    if(name){
                        this.setState((state: { items: any; })=>({
                            items:[...state.items,{id:uuid(),name}]
                        })
                        );
                    }
                }
                }>
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id,name})=>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger"
                                    onClick={()=>{
                                        this.setState((state: any)=>({
                                            items:this.state.items.filter(item=>item.id!=id)
                                        }));
                                    }}>
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        )
                        )}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default ShoppingList;