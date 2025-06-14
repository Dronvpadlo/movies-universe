import React, {FC} from 'react';
import type {Production_companies} from "../../../models/IMovieDetails.ts";
import {basePosterUrl} from "../../../consts/urls.ts";

type ProductCompanyPropType = {
    productCompany: Production_companies
}
const ProductionCompanyComponent:FC<ProductCompanyPropType> = ({productCompany}) => {
    const fullLogoPath = basePosterUrl + '/w154' + productCompany.logo_path;
    return (
        <div>
            <div>{productCompany.name}</div>
            <div>Origin Country: {productCompany.origin_country}</div>
            {
                productCompany.logo_path && <img src={fullLogoPath} alt={productCompany.name}/>
            }
        </div>
    );
};

export default ProductionCompanyComponent;