import React from 'react';
import {Button, Input, Label} from 'reactstrap';

class FormPlants extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            id:'',
          };
      }

      inputOnChange = (id, event) => {
        this.setState({[id]: event.currentTarget.value});
        this.setState({value: event.currentTarget.value});
        
      };
      
    render() {
        const {
            value,
          } = this.state;
        return(
            <form method="POST" action="">
          <Label for="plantName">Plant name :</Label>
          <Input
            id="plantName"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="category">Category Type :</Label>
          <Input
            id="category"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="slugCategory">Slug for categories :</Label>
          <Input
            id="slugCategory"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="watering">Watering in days :</Label>
          <Input
            id="watering"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="fertillzing">Fertillzing in days :</Label>
          <Input
            id="fertillzing"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="exposure">Exposure :</Label>
          <Input
            id="exposure"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="humidity">Humidity type :</Label>
          <Input
            id="humidity"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="temperature">Temperature :</Label>
          <Input
            id="temperature"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="blooming">Blooming :</Label>
          <Input
            id="blooming"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="difficultyLevel">Difficulty level :</Label>
          <Input
            id="difficultyLevel"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="room">Room for flower :</Label>
          <Input
            id="room"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="lastWateres">Last wateres :</Label>
          <Input
            id="lastWateres"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />
          <Label for="lastFertillized">Last fertillized :</Label>
          <Input
            id="lastFertillized"
            type="text"
            value={ value }  
            onChange={this.inputOnChange}
            />

          <Button type="submit" className="mt-3">Wyslij formularz</Button>
        </form>
             
        );
    }
}
export default FormPlants;