import React from 'react';
import './ClassComponent.css';

class ClassComponent extends React.PureComponent {
    constructor(props){
        super(props);
      }
    render() {
        return(
            <dl className='list-definition'>
                <dt>Pierwszy element Listy definicyjnej</dt>
                <dd>Definicja pierwszego elementu</dd>
                <dt>Drugi element Listy definicyjnej</dt>
                <dd>Definicja drugiego elementu</dd>
                <dt>Trzeci element Listy definicyjnej</dt>
                <dd>Definicja trzeciego elementu</dd>
            </dl>

        );
    }
}
export default ClassComponent;