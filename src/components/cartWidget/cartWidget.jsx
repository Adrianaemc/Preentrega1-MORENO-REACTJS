import React, { useState } from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
    const [cartCount] = useState(5);

    return (
        <IconButton className="cart-icon">
            <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon fontSize="large" />
            </Badge>
        </IconButton>
    );
};

export default CartWidget;
