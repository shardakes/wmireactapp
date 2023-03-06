import React from 'react';
import Form from 'react-bootstrap/Form';

const CountryList=(props) =>{

    React.useEffect(() => {
        onSelect('');
    }, []);

    const onSelect = (countryName) => {
        //alert(countryName);
        props.setSelectedCountry(countryName);
    }

    const CntryList = props.cntry.map((row, index) => {
        if (index < 1) {
            return (<><Form.Group className="mb-3 wht-text" key="0" >
                <Form.Check type="radio" name="SelectCountry" label="All Country" value="" defaultChecked
                    onChange={(e) => onSelect("")} />
            </Form.Group><Form.Group className="mb-3 wht-text" key={index + 1} >
                    <Form.Check type="radio" name="SelectCountry" label={row} value={row}
                        onChange={(e) => onSelect(row)} />
                </Form.Group></>
            );
        } else {
            return (<Form.Group className="mb-3 wht-text" key={index + 1} >
                <Form.Check type="radio" name="SelectCountry" label={row} value={row}
                    onChange={(e) => onSelect(row)} />
            </Form.Group>
            );
        }

    });
  return (
    <>{CntryList}</>
  )
}
export default CountryList;