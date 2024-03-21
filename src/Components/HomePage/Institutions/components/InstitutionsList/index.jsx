import React from "react";
import Institution from "./components/Institution";

const InstitutionsList = (props) => {
    const { institutionList } = props;
    return (
        <div className="institution-cards">
            {
                institutionList.map((value, index) => {
                    return (
                        <Institution
                            key={index}
                            index={index}
                            name={value.name}
                            address={value.address}
                            href={value.href}
                            image={value.image}
                        />
                    );
                })
            }
        </div>
    );
}

export default InstitutionsList;