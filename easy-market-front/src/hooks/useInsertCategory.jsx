import api from "../services/api";

export const useInsertCategory = () => {
    const insertCategory = async (data) => {
        try {
            const response = await api.post("/category.php", {
                name: data.name,
                tax_percentage: parseFloat(data.taxPercentage),
            });
            return response;
        } catch (error) {}
    };

    return { insertCategory };
};
