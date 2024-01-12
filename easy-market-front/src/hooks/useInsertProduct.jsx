import { useState, useEffect, useReducer } from "react";
import api from "../services/api";

export const useInsertProduct = () => {
    const insertProduct = async (data) => {
        try {
            const response = await api.post("/product.php", {
                name: data.name,
                category: parseInt(data.categoryId),
                unitary_value: parseFloat(data.unitaryValue),
                available_quantity: parseInt(data.quantity),
            });

            console.log(response);
        } catch (error) {}
    };

    return { insertProduct };
};
