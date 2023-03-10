import PropertyCard from "./PropertyCard"
import { useState } from "react"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function PropertyList ({ properties, user, onDeleteProperty, updateUser }) {
    const [neighborhood, setNeighborhood] = useState("All")

    const propertiesToShow = properties?.filter(property => property.neighborhood === neighborhood)

    function handleNeighborhoodClick (e) {
        setNeighborhood(e.target.value)
    }

    return (
        <>
            <br></br>
            <ButtonGroup size="lg" aria-label="Basic example">
                <Button onClick={handleNeighborhoodClick} value="All">All</Button>
                <Button onClick={handleNeighborhoodClick} value="LoDo">LoDo</Button>
                <Button onClick={handleNeighborhoodClick} value="LoHi">LoHi</Button>
                <Button onClick={handleNeighborhoodClick} value="RiNo">RiNo</Button>
                <Button onClick={handleNeighborhoodClick} value="Sunnyside">Sunnyside</Button>
                <Button onClick={handleNeighborhoodClick} value="Berkely">Berkely</Button>
                <Button onClick={handleNeighborhoodClick} value="Five Points">Five Points</Button>
                <Button onClick={handleNeighborhoodClick} value="Jefferson Park">Jefferson Park</Button>
            </ButtonGroup>
            <br></br>
            <Container >
                <Row>
                    {neighborhood === "All" ? properties?.map(property => <PropertyCard key={property.id} property={property} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser}/>)
                    : propertiesToShow?.map(property => <PropertyCard key={property.id} property={property} user={user} onDeleteProperty={onDeleteProperty} updateUser={updateUser}/>)}
                </Row>
            </Container>
        </>
    )
}

export default PropertyList