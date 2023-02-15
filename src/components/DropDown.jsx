import { Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaThLarge, FaTh } from 'react-icons/fa';
import React, { useState } from "react";

const DropDown = () => {
    const [selectedGenre, setSelectedGenre] = useState("Genres");

    const handleSelect = (eventKey) => {
        setSelectedGenre(eventKey);
    };
    return (

        <Row className="d-flex justify-content-between">
            <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <DropdownButton
                    id="dropdown-item-button"
                    title={selectedGenre}
                    variant="secondary"
                    size="sm"
                    className="ml-4 mt-1 rounded-0"
                    style={{ backgroundColor: "#221f1f" }}
                >
                    <Dropdown.Item eventKey="Comedy" onSelect={handleSelect}>
                        Comedy
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Drama" onSelect={handleSelect}>
                        Drama
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Thriller" onSelect={handleSelect}>
                        Thriller
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <div>
                <FaThLarge className="icons" />
                <FaTh className="icons" />
            </div>
        </Row>
    )
}

export default DropDown