import React from 'react';


const UpdateOeuvre = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // Ajout de l'état pour la catégorie sélectionnée
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState("")

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/categorie`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories : ",
                    error
                );
            });
        axios
            .get(`http://localhost:8000/api/type`)
            .then((res) => {
                setType(res.data);
            })
            .catch((error) => {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories : ",
                    error
                );
            });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };


    return (
        <div>

        </div>
    );
};

export default UpdateOeuvre;

<div className="bg-blackOP30 flex flex-row">
    <select value={selectedCategory} onChange={handleCategoryChange} className=" bg-transparent ">
        <option value="" className="bg-transparent">Sélectionnez une catégorie</option>
        {categories.map((category) => (
            <option key={category.id} value={category.name}>
                {category.name}
            </option>
        ))}
    </select>
    <select value={selectedType} onChange={handleTypeChange} className=" bg-transparent ">
        <option value="" className="bg-transparent">Sélectionnez un type</option>
        {type.map((type) => (
            <option key={type.id} value={type.name}>
                {type.name}
            </option>
        ))}
    </select>
</div>