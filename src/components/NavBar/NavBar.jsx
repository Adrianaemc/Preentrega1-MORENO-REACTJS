import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Container } from "@mui/material";
import CartWidget from "../cartWidget/cartWidget";
import "./NavBar.css";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCategory, setOpenCategory] = useState(null);

    const handleClick = (event, category) => {
        setAnchorEl(event.currentTarget);
        setOpenCategory(category);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenCategory(null);
    };

    const categories = [
        { name: "Tecnología", subcategories: ["Celulares", "Tabletas"] },
        { name: "Oficina", subcategories: ["Sillas", "Escritorios"] },
    ];

    return (
        <>
            <AppBar position="fixed" className="navbar">
                <Container>
                    <Toolbar className="toolbar">
                        <Typography variant="h6" className="navbar-title" style={{ fontSize: "2rem" }}>
                            OFICENTER
                        </Typography>

                        {categories.map((category, index) => (
                            <div key={index}>
                                <Button
                                    className="navbar-button"
                                    onClick={(event) => handleClick(event, category.name)}
                                    style={{ fontSize: "1.2rem" }}
                                >
                                    {category.name}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={openCategory === category.name}
                                    onClose={handleClose}
                                >
                                    {category.subcategories.map((sub, subIndex) => (
                                        <MenuItem key={subIndex} onClick={handleClose}>
                                            {sub}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        ))}

                        <CartWidget />
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Margen para que el contenido no quede tapado */}
            <div className="spacer"></div>
        </>
    );
};

export default NavBar;
