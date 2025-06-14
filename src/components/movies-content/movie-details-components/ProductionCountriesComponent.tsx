import React, {FC} from 'react';
import type {Production_countries} from "../../../models/IMovieDetails.ts";

type ProductCountryProp = {
    productCountry: Production_countries
}
const ProductionCountriesComponent:FC<ProductCountryProp> = ({productCountry}) => {
    return (
        <div>
            <div>Name: {productCountry.name} {productCountry.iso_3166_1}</div>

        </div>
    );
};

export default ProductionCountriesComponent;